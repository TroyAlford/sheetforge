import bound from '../utilities/bound'
import flow from '../utilities/flow'
import range from '../utilities/range'
import sum from '../utilities/sum'
import Character from './Character'

const ATTRIBUTES = [
  'acuity', 'agility', 'confidence',
  'devotion', 'fitness', 'focus',
  'intellect', 'intuition', 'strength',
]

const BASE_LAYER = {
  size: 0,
  naturalArmor: 0,

  xp: 0,
  rp: 0,

  accuracy() { return this.averageOf('acuity', 'focus', 'intuition') },
  body() { return this.averageOf('strength', 'agility', 'fitness') },
  damageThresholdLight() {
    return bound(this.sumOf('size', 'strength', 'fitness', 'armor', 'naturalArmor'), { min: 1 })
  },
  damageThresholdDeep() { return this.modifierFor('damageThresholdLight') * 2 },
  damageThresholdDeath() { return this.modifierFor('damageThresholdDeep') * 2 },
  might() { return this.modifierFor('size') + this.averageOf('strength', 'fitness') },
  mind() { return this.averageOf('intellect', 'acuity', 'focus') },
  potency() { return this.averageOf('strength', 'intellect', 'confidence') },
  reflex() { return this.averageOf('agility', 'acuity', 'intuition') },
  resilience() { return this.averageOf('fitness', 'focus', 'devotion') },
  speed() { return 6 + this.modifierFor('size') + Math.round(this.modifierFor('fitness') / 2) },
  spirit() { return this.averageOf('confidence', 'intuition', 'devotion') },
  toughness() {
    return (
      this.modifierFor('naturalArmor') + this.modifierFor('armor') +
      this.averageOf('strength', 'fitness', 'size')
    )
  },

  power() {
    return flow([
      array => array.map(attr => range(-1, this.layers[0].get(attr))),
      array => array.reduce((set, values) => [...set, ...values], []),
      array => array.map(value => (Math.abs(value + 1) ** 2) * (value >= 0 ? 1 : -1)),
      array => array.reduce(sum, 0),
    ], ATTRIBUTES)
  },
}

ATTRIBUTES.forEach((attr) => { BASE_LAYER[attr] = -1 })

export default class AxisCharacter extends Character {
  constructor({ effects, equipment, name } = {}) {
    super({
      layers: [BASE_LAYER],
      effects,
      equipment,
      name,
    })
  }
}
