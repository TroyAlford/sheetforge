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

const SKILLS = [
  { name: 'Magic: Arcane', value: [1, 3] },
  { name: 'Combat: Swordfighting', value: [4, 4] },
  { name: 'Magic: Spiriturgy', value: [3, 5] },
  { name: 'Horseback Riding', value: [0, 3] },
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
  damageThresholdDeep() { return 2 * this.attributes.get('damageThresholdLight')() },
  damageThresholdDeath() { return 2 * this.attributes.get('damageThresholdDeep')() },
  might() { return this.valueOf('size') + this.averageOf('strength', 'fitness') },
  mind() { return this.averageOf('intellect', 'acuity', 'focus') },
  potency() { return this.averageOf('strength', 'intellect', 'confidence') },
  reflex() { return this.averageOf('agility', 'acuity', 'intuition') },
  resilience() { return this.averageOf('fitness', 'focus', 'devotion') },
  speed() { return 6 + this.valueOf('size') + Math.round(this.valueOf('fitness') / 2) },
  spirit() { return this.averageOf('confidence', 'intuition', 'devotion') },
  toughness() {
    return (
      this.valueOf('naturalArmor') + this.valueOf('armor') +
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
  constructor({ effects, equipment, name, skills } = {}) {
    super({
      layers: [BASE_LAYER],
      effects,
      equipment,
      name,
      skills: skills || SKILLS,
    })
  }

  get attributes() { return this.layers[0] }
}
