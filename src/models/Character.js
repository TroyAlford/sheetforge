import { defaultsDeep, flow, forOwn, pickBy } from 'lodash'
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
    this.effects = effects || DEFAULT.effects
    this.equipment = equipment || DEFAULT.equipment
    this.layers = layers || DEFAULT.layers

    this.defaults = {
      attribute: defaultsDeep(attribute, DEFAULT.attribute),
    }
  }

  get ActiveEffects() {
    return [
      ...this.layers.filter(layer => layer.active !== false).map(layer => layer.effects || []),
      ...this.equipment.filter(item => item.equipped).map(item => item.effects || []),
      ...this.effects || [],
    ]
  }
  get Attributes() {
    const activeLayers = this.layers.filter(layer => layer.active !== false)
    const attributeDefaults = this.defaults.attribute

    return (
      activeLayers.reduce((attrs, layer) => {
        const numericals = pickBy(layer.attributes, value => typeof(value) === 'number')
        const calculated = pickBy(layer.attributes, value => typeof(value) === 'string')

        const changes = {}

        forOwn(numericals, (value, key) => {
          const current = [attrs[key], attributeDefaults.value, 0]
                          .filter(v => typeof(v) === 'number')[0]
          attrs[key] = value + current
        })

        Object.keys(calculated)
        .map(key => ({ key, calc: calculated[key] }))
        .forEach(({ key, calc }) => {
          changes[key] = this.calculate(calc, attrs, attributeDefaults)
        })

        return { ...attrs, ...changes }
      }, {})
    )
  }

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
}
