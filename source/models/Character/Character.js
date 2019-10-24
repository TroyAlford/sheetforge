import deepEqual from 'deep-equal'
import deepMerge from 'deepmerge'
import Observable from 'observable-slim'
import Calculator from '@/models/Calculator'
import Collection from '@/models/generic/Collection'
import EventSource from '@/models/generic/EventSource'
import clone from '@/utilities/clone'
import flatten from '@/utilities/flatten'
import getPathValue from '@/utilities/getPathValue'
import setPathValue from '@/utilities/setPathValue'
import unique from '@/utilities/unique'

const COMPUTABLE = {
  attributes: ['value'],
  effects: ['value'],
  resources: ['maximum'],
  skills: ['mastery', 'theory'],
}
/* eslint-disable object-property-newline,sort-keys */
const PRIORITY_INDEX = {
  attributes: 0, skills: 1, resources: 2, effects: 3,
  value: 0, mastery: 0, maximum: 0, theory: 1,
}
/* eslint-enable object-property-newline,sort-keys */

export default class Character extends EventSource {
  static DEFAULTS = {
    attributes: [],
    items: [],
    resources: [],
    skills: [],
    spells: [],
    traits: [],
    // eslint-disable-next-line sort-keys
    state: {
      conditions: [],
    },
  }
  COMPUTED = new Map()
  calculator = new Calculator(PRIORITY_INDEX)

  constructor(data) {
    super()
    const DATA = deepMerge(Character.DEFAULTS, data)

    Object.keys(Character.DEFAULTS).forEach((key) => {
      if (!Array.isArray(DATA[key])) return
      this[key] = Observable.create(new Collection(), true, (
        changes => this.handleChanges(key, changes)
      ))
      DATA[key].forEach(value => this[key].push(value))
    })

    this.state = DATA.state
  }

  get conditions() {
    const current = this.state.conditions
    const conditions = unique([
      ...this.effects.map(e => e.condition),
      ...current,
    ].sort()).filter(Boolean)

    conditions.active = conditions.filter(condition => current.includes(condition))
    conditions.activate = current.push
    conditions.deactivate = (...values) => {
      this.state.conditions = current.filter(value => !values.includes(value))
    }

    return conditions
  }
  get effects() {
    const effects = flatten([
      // Trait Effects first, because they're inherent
      this.traits.filter(Boolean).map(trait => (
        trait.effects.map(e => ({ ...e, origin: `Trait: ${trait.name}` }))
      )),
      // Direct Effects second, because they're cast on the character
      this.spells.filter(spell => spell.isActive).map(spell => (
        spell.effects.map(e => ({ ...e, origin: `Spell: ${spell.name}` }))
      )),
      // Item Effects third, because they're indirect
      this.items.filter(item => item.equipped).map(item => (
        item.effects.map(e => ({ ...e, origin: `Item: ${item.name}` }))
      )),
    ]).filter(Boolean)
      .map(effect => ({ ...effect, active: this.state.conditions.includes(effect.condition) }))

    effects.active = effects.filter(effect => effect.active)
    effects.activeFor = target => effects.active.filter(effect => (
      effect.target.toLowerCase() === target.toLowerCase()
    ))

    return effects
  }

  get = path => getPathValue(this.current, path)
  set = (key = {}, value = undefined) => {
    if (typeof key === 'string' && value !== undefined) {
      const currentValue = getPathValue(this, key)
      if (!deepEqual(currentValue, value)) {
        setPathValue(this, key, clone(value))
      }
    } else if (typeof key === 'object' && value === undefined) {
      Object.assign(this, clone(key))
    }
  }

  handleChanges = (collection, changes) => {
    changes.forEach((change) => {
      if (change.target instanceof Collection && change.property !== 'length') {
        if (['add', 'update'].includes(change.type)) { // adding or updating a collection item
          const properties = COMPUTABLE[collection] || []
          properties.forEach((prop) => {
            const key = this.calculator.key(change.newValue.name, [prop, collection])
            this.calculator.compute(key, change.newValue[prop], 0)
            console.log(this.calculator.FORMULAS)
          })
        }
      }
      this.event('change', collection, change)
    })
  }
}


/*
  resolveSymbolName = (symbol) => {
    const segments = symbol.toLowerCase().split('$')
    let key
    let name
    let type
    if (segments.length === 3) {
      [type, name, key] = segments
    } else if (segments.length === 2) {
      [type, name, key] = [...segments, 'value']
    } else if (segments.length === 1) {
      [type, name, key] = ['attributes', ...segments, 'value']
    }

    return [type, name, key].join('$')
  }

  compute() {
    this.CACHE.values = {}
    this.CACHE.modifiers = []

    let formulas = []
    this.attributes.forEach(({ name, raw }) => {
      const key = `attributes$${symbolify(name)}$value`
      if (typeof raw === 'string') {
        formulas.push({ key, value: raw })
      } else {
        this.CACHE.values[key] = raw
      }
    })
    this.resources.forEach(({ name, maximum }) => {
      const key = `resources$${symbolify(name)}$maximum`
      if (typeof maximum === 'string') {
        formulas.push({ key, value: maximum })
      } else {
        this.CACHE.values[key] = maximum
      }
    })
    this.skills.forEach(({ name, theory, mastery }) => {
      const key = `skills$${symbolify(name)}`
      if (typeof theory === 'string') {
        formulas.push({ key: `${key}$theory`, value: theory })
      } else {
        this.CACHE.values[`${key}$theory`] = theory
      }
      if (typeof mastery === 'string') {
        formulas.push({ key: `${key}$mastery`, value: mastery })
      } else {
        this.CACHE.values[`${key}$mastery`] = mastery
      }
    })
    this.effects.forEach(({ modifier, ...rest }) => {
      if (typeof modifier !== 'string') {
        formulas.push({ key: 'modifier', value: modifier, ...rest })
      } else {
        this.CACHE.modifiers.push({ value: modifier, ...rest })
      }
    })

    while (formulas.length) {
      const lengthBefore = formulas.length

      formulas = formulas.filter((formula) => {
        const { key, value, ...rest } = formula
        // eslint-disable-next-line no-param-reassign
        formula.symbols = formula.symbols || toSymbols(value).map(this.resolveSymbolName)
        const unresolved = formula.symbols.filter(symbol => this.CACHE.values[symbol] !== undefined)

        if (!unresolved.length) {
          if (key === 'modifier') {
            this.CACHE.modifiers.push({ value: calculate(value, this.CACHE.values), ...rest })
          } else {
            this.CACHE.values[value] = calculate(value, this.CACHE.values)
          }
        }

        return Boolean(unresolved.length)
      })

      if (formulas.length === lengthBefore) {
        break
      }
    }

    formulas.forEach(({ value }) => {
      this.CACHE.values[value] = calculate(value, this.CACHE.values)
    })
  }
*/
