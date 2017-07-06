import bindMethods from '../utility/bindMethods'
import pickBy from '../utility/pickBy'
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

function calculate(formula, values, options) {
  const parser = math.parser()
  const parsed = math.parse(formula)
  parsed.traverse((node) => {
    if (node.type === 'SymbolNode') {
      parser.set(node.name,
        values[node.name] !== undefined ? values[node.name] : options.value
      )
    }
  })
  let result = parser.eval(formula)

  if (typeof options.min === 'number' && result < options.min) {
    result = options.min
  }
  if (typeof options.max === 'number' && result > options.max) {
    result = options.max
  }

  return result
}

export default class Character {
  constructor({ effects, equipment, layers } = {}, { attribute } = {}) {
    this.effects = effects || DEFAULT.effects
    this.equipment = equipment || DEFAULT.equipment
    this.layers = layers || DEFAULT.layers

    bindMethods(this, ['calculate', 'layerReducer'])

    this.defaults = {
      attribute: { ...DEFAULT.attribute, ...(attribute || {}) },
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
    return this.ActiveLayers
               .map(layer => layer.attributes)
               .reduce(this.layerReducer, {})
  }

  get Effects() {
    const all = [
      ...this.layers.map(layer => layer.effects || {}),
      ...this.equipment.map(item => item.effects || {}),
      this.effects,
    ]
    // [{ 'key': { val: 1 } }, { 'key': { val: 1 } }]

    const layers = {}
    all.forEach(layer => Object.keys(layer).forEach((key) => {
      if (!layers[key]) layers[key] = []
      layers[key].push(layer[key])
    }))
    // { 'key': [{ val: 1 }, { val: 1 }] }

    Object.keys(layers).forEach((key) => {
      layers[key] = layers[key].reduce(this.layerReducer, {})
    })
    // [{ 'key': { val: 2 } }]

    return layers
  }

  get Naked() {
    return this.ActiveLayers.reduce(this.layerReducer, {})
  }
  get Equipped() {
    return [this.Naked, ...this.ActiveEquipment].reduce(this.layerReducer, {})
  }
  get Buffed() {
    return [this.Equipped, ...this.ActiveEffects].reduce(this.layerReducer, {})
  }

  layerReducer(attrs, layer) {
    const defaults = this.defaults.attribute
    const numericals = pickBy(layer, value => typeof value === 'number')
    const calculated = pickBy(layer, value => typeof value === 'string')

    const changes = {}

    Object.keys(numericals)
    .forEach((key) => {
      const current = [attrs[key], defaults.value, 0]
                      .filter(v => typeof v === 'number')[0]
      attrs[key] = current + numericals[key] // eslint-disable-line no-param-reassign
    })

    Object.keys(calculated)
    .map(key => ({ key, calc: calculated[key] }))
    .forEach(({ key, calc }) => {
      changes[key] = calculate(calc, attrs, defaults)
    })

    return { ...attrs, ...changes }
  }
}
