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

  accuracy() { return this.averageOf('acuity', 'focus', 'intuition') },
  body() { return this.averageOf('strength', 'agility', 'fitness') },
  damageThreshold() {
    return bound(this.sumOf('size', 'strength', 'fitness', 'armor', 'naturalArmor'), { min: 1 })
  },
  might() { return this.modifierFor('size') + this.averageOf('strength', 'fitness') },
  mind() { return this.averageOf('intellect', 'acuity', 'focus') },
  potency() { return this.averageOf('strength', 'intellect', 'confidence') },
  reflex() { return this.averageOf('agility', 'acuity', 'intuition') },
  resilience() { return this.averageOf('fitness', 'focus', 'devotion') },
  spirit() { return this.averageOf('confidence', 'intuition', 'devotion') },
  toughness() {
    return (
      this.modifierFor('naturalArmor') + this.modifierFor('armor') +
      this.averageOf('strength', 'fitness', 'size')
    )
  },
}

export default class AxisCharacter extends Character {
  constructor({ effects, equipment } = {}) {
    super({
      layers: [baseAttributes],
      effects,
      equipment,
    })
  }

  wounds = observable(0)
}
