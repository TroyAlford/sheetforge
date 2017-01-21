import { defaultsDeep, flow, forOwn, pickBy } from 'lodash'
import autoBind from 'react-autobind'
import math from '../vendor/mathjs'

const DEFAULT = {
  effects: [],
  equipment: [],
  layers: [{
    attributes: {},
    effects: [],
  }],
  attribute: {
    max: undefined,
    min: undefined,
    value: 0,
  },
}

export default class Character {
  constructor(
    /* Character Info */
    { effects = DEFAULT.effects, equipment = DEFAULT.equipment, layers = DEFAULT.layers } = {},
    /* Options */
    { attribute } = {}
  ) {
    autoBind(this)

    this.effects = effects || DEFAULT.effects
    this.equipment = equipment || DEFAULT.equipment
    this.layers = layers || DEFAULT.layers

    this.defaults = {
      attribute: defaultsDeep(attribute, DEFAULT.attribute),
    }
  }

  get ActiveEffects() {
    return [
      ...this.ActiveLayers.map(layer => layer.effects || []),
      ...this.equipment.filter(item => item.equipped).map(item => item.effects || []),
      ...this.effects || [],
    ]
  }
  get ActiveLayers() {
    return this.layers.filter(layer => layer.active !== false)
  }

  get Attributes() {
    const attributeDefaults = this.defaults.attribute
    return this.ActiveLayers
               .map(layer => layer.attributes)
               .reduce(this.layerReducer, {})
  }

  get Effects() {
    const all = this.layers.map(layer => layer.effects || {})
    // [{ 'vs Undead': { str: 1 } }, { 'vs Undead': { str: 1 } }]

    const layers = {}
    all.forEach(layer => Object.keys(layer).map(key => {
      if (!layers[key]) layers[key] = []
      layers[key].push(layer[key])
    }))
    // { 'vs Undead': [{ str: 1 }, { str: 1 }] }

    Object.keys(layers).forEach(key => {
      layers[key] = layers[key].reduce(this.layerReducer, {})
    })
    // [{ 'vs Undead': { str: 2 } }]

    return layers
  }

  // applyEffects(effects = [], current = {}) {
  //   effects.forEach(effect => {

  //   })
  // }

  calculate(formula, values, options) {
    const parser = math.parser()
    const parsed = math.parse(formula)
    parsed.traverse(node => {
      if (node.type === 'SymbolNode') {
        parser.set(node.name,
          values[node.name] !== undefined ? values[node.name] : options.value
        )
      }
    })
    let result = parser.eval(formula)

    if (typeof(options.min) === 'number' && result < options.min)
      result = options.min
    if (typeof(options.max) === 'number' && result > options.max)
      result = options.max

    return result
  }
  layerReducer(attrs, layer) {
    const defaults = this.defaults.attribute
    const numericals = pickBy(layer, value => typeof(value) === 'number')
    const calculated = pickBy(layer, value => typeof(value) === 'string')

    const changes = {}

    forOwn(numericals, (value, key) => {
      const current = [attrs[key], defaults.value, 0]
                      .filter(v => typeof(v) === 'number')[0]
      attrs[key] = value + current
    })

    Object.keys(calculated)
    .map(key => ({ key, calc: calculated[key] }))
    .forEach(({ key, calc }) => {
      changes[key] = this.calculate(calc, attrs, defaults)
    })

    return { ...attrs, ...changes }
  }
}
