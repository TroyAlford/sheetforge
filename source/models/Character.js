import { types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'
import { average, sum } from '../utilities/math'
import bound from '../utilities/bound'
import range from '../utilities/range'
import sequence from '../utilities/sequence'
import Skill from './Skill'

export const PRIMARY_ATTRIBUTES = [
  'acuity', 'agility', 'confidence',
  'devotion', 'fitness', 'focus',
  'intellect', 'intuition', 'strength',
]
export const SECONDARY_ATTRIBUTES = [
  'size', 'naturalArmor',
]
export const DERIVED_ATTRIBUTES = [
  'body', 'mind', 'spirit',
  'potency', 'reflex', 'resilience',
  'accuracy', 'might', 'toughness',
  'speed',

  'damageThresholdLight', 'damageThresholdDeep', 'damageThresholdDeath',

  'power',
]

export const ATTRIBUTES = [
  ...PRIMARY_ATTRIBUTES,
  ...SECONDARY_ATTRIBUTES,
  ...DERIVED_ATTRIBUTES,
]

const Character = types
  .model('Character', {
    id: autoHash,
    name: 'Unnamed Character',

    xp: 0,
    rp: 0,

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

    // effects: types.array(Effect, []),
    // equipment: types.array(types.union(Armor, Equipment, Weapon), []),
    skills: types.optional(types.array(Skill), []),
  }).views(my => ({
    /* eslint-disable max-len */
    get accuracy() { return average(my.acuity, my.focus, my.intuition) },
    get body() { return average(my.strength, my.agility, my.fitness) },
    get might() { return my.size + average(my.strength, my.fitness) },
    get mind() { return average(my.intellect, my.acuity, my.focus) },
    get potency() { return average(my.strength, my.intellect, my.confidence) },
    get reflex() { return average(my.agility, my.acuity, my.intuition) },
    get resilience() { return average(my.fitness, my.focus, my.devotion) },
    get speed() { return 6 + my.size + Math.round(my.fitness / 2) },
    get spirit() { return average(my.confidence, my.intuition, my.devotion) },
    get toughness() { return average(my.strength, my.fitness, my.size) + my.naturalArmor + my.armor },
    /* eslint-enable max-len */

    get armor() { return 0 },

    get power() {
      return sequence(PRIMARY_ATTRIBUTES, [
        array => array.map(attr => range(-1, my[attr])),
        array => array.reduce((set, values) => [...set, ...values], []),
        array => array.map(value => (Math.abs(value + 1) ** 2) * (value >= 0 ? 1 : -1)),
        array => array.reduce(sum, 0),
      ])
    },

    get damageThresholdLight() {
      return bound(
        my.size + my.strength + my.fitness + my.armor + my.naturalArmor,
        { min: 1 }
      )
    },
    get damageThresholdDeep() { return my.lightWoundThreshold * 2 },
    get damageThresholdDeath() { return my.lightWoundThreshold * 4 },
    get equipped() { return my.equipment.filter(e => e.equipped) },
  })).actions(my => ({
    /* eslint-disable no-param-reassign */
    setAttribute(name, value) { my[name] = value },
    /* eslint-enable no-param-reassign */
  }))

export default Character
