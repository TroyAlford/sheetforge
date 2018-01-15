import { observable } from 'mobx'
import bound from '../utilities/bound'
import Character from './Character'

const baseAttributes = {
  acuity: -1,
  agility: -1,
  confidence: -1,
  devotion: -1,
  fitness: -1,
  focus: -1,
  intellect: -1,
  intuition: -1,
  strength: -1,

  size: 0,
  naturalArmor: 0,

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
}

export default class AxisCharacter extends Character {
  constructor({ effects, equipment, name } = {}) {
    super({
      layers: [baseAttributes],
      effects,
      equipment,
      name,
    })
  }

  wounds = observable(0)
}
