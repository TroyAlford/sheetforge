import { defaultsDeep, forOwn, pickBy } from 'lodash'
import math from '../vendor/mathjs'

const DEFAULT = {
  effects: [],
  equipment: [],
  layers: [{
    attributes: {},
    effects: [],
  }],
  attribute: {
    value: 0,
    min: 0,
    max: 5,
  },
}

export default class Character {
  constructor({
    effects = DEFAULT.effects,
    equipment = DEFAULT.equipment,
    layers = DEFAULT.layers
  }, { attribute } = {}) {
    this.effects = effects || DEFAULT.effects
    this.equipment = equipment || DEFAULT.equipment
    this.layers = layers || DEFAULT.layers

    this.defaults = {
      attribute: defaultsDeep(attribute, DEFAULT.attribute),
    }
  }

  get ActiveEffects() {
    return [
      ...this.layers.filter(layer => layer.active).map(layer => layer.effects),
      ...this.equipment.filter(item => item.equipped).map(item => item.effects),
      ...this.effects,
    ]
  }
  get Attributes() {
    const activeLayers = this.layers.filter(layer => layer.active)
    const defaults = this.defaults.attribute

    return (
      activeLayers.reduce((attrs, layer) => {
        const numericals = pickBy(layer.attributes, value => typeof(value) === 'number')
        const calculated = pickBy(layer.attributes, value => typeof(value) === 'string')

        forOwn(numericals, (value, key) => {
          const current = [attrs[key], defaults.value, 0]
                          .filter(v => typeof(v) === 'number')[0]
          attrs[key] = value + current
        })
        forOwn(calculated, (value, key) => {
          attrs[key] = this.calculate(value, attrs, defaults)
        })

        return attrs
      }, {})
    )
  }

  calculate(formula, values, options) {
    const parser = math.parser()
    const parsed = math.parse(formula)
    parsed.traverse(node => {
      if (node.type === 'SymbolNode')
        parser.set(node.name, values[node.name] || options.defaultValue || 0)
    })
    let result = parser.eval(formula)

    if (typeof(options.min) === 'number' && result < options.min)
      result = options.min
    if (typeof(options.max) === 'number' && result > options.max)
      result = options.max

    return result
  }
}
