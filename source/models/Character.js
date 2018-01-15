import { computed, observable } from 'mobx'

function sum(a, b) { return a + b }

export default class Character {
  @observable name = 'Unnamed Character';
  layers = observable([]);
  effects = observable([]);
  equipment = observable([]);
  descriptors = observable.map({});

  constructor({ effects, equipment, layers, name } = {}) {
    this.effects.replace(effects || [])
    this.equipment.replace(equipment || [])
    this.layers.replace(layers || [])
    if (typeof name === 'string') this.name = name
  }

  @computed get modifiers() {
    return [
      ...this.layers.filter(layer => !layer.inactive),
      ...this.effects.filter(effect => effect.active).map(effect => effect.modifiers),
      ...this.equipment.filter(item => item.equipped).map(item => item.modifiers),
    ]
  }

  averageOf = (...names) => Math.round(this.sumOf(...names) / names.length)
  sumOf = (...names) => names.map(name => this.modifierFor(name)).reduce(sum, 0)

  modifierFor = name => (
    this.modifiers
      .map((modifier) => {
        if (typeof modifier[name] === 'number') return modifier[name]
        if (typeof modifier[name] === 'function') return modifier[name].apply(this)
        return undefined
      })
      .filter(value => value !== undefined)
      .reduce(sum, 0)
  )
}
