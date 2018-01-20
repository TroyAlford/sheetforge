import { types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'
import bound from '../utilities/bound'
import flow from '../utilities/flow'
import range from '../utilities/range'
import { averageOf, sum } from '../utilities/math'
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
  }).views(self => ({
    get accuracy() { return averageOf(self.acuity, self.focus, self.intuition) },
    get body() { return averageOf(self.strength, self.agility, self.fitness) },
    get might() { return self.size + averageOf(self.strength, self.fitness) },
    get mind() { return averageOf(self.intellect, self.acuity, self.focus) },
    get potency() { return averageOf(self.strength, self.intellect, self.confidence) },
    get reflex() { return averageOf(self.agility, self.acuity, self.intuition) },
    get resilience() { return averageOf(self.fitness, self.focus, self.devotion) },
    get speed() { return 6 + self.size + Math.round(self.fitness / 2) },
    get spirit() { return averageOf(self.confidence, self.intuition, self.devotion) },
    get toughness() { return averageOf(self.strength, self.fitness, self.size) + self.naturalArmor + self.armor },

    get armor() { return 0 },

    get power() {
      return flow([
        array => array.map(attr => range(-1, self[attr])),
        array => array.reduce((set, values) => [...set, ...values], []),
        array => array.map(value => (Math.abs(value + 1) ** 2) * (value >= 0 ? 1 : -1)),
        array => array.reduce(sum, 0),
      ], PRIMARY_ATTRIBUTES)
    },

    get damageThresholdLight() {
      return bound(
        self.size + self.strength + self.fitness + self.armor + self.naturalArmor,
        { min: 1 }
      )
    },
    get damageThresholdDeep() { return self.lightWoundThreshold * 2 },
    get damageThresholdDeath() { return self.lightWoundThreshold * 4 },
    // get equipped() {
    //   return self.equipment.map(e => e.equipped === true)
    // }
  })).actions(self => ({
    /* eslint-disable no-param-reassign */
    setAttribute(name, value) { self[name] = value },
    /* eslint-enable no-param-reassign */
  }))

export default Character
