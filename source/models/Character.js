import { types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'
import { average, sum } from '../utilities/math'
import bound from '../utilities/bound'
import Attribute from './Attribute'
import Armor from './Armor'
import Item from './Item'
import Skill from './Skill'
import Trait from './Trait'
import Weapon from './Weapon'

export const PRIMARY_ATTRIBUTES = [
  'acuity', 'agility', 'confidence',
  'devotion', 'fitness', 'focus',
  'intellect', 'intuition', 'strength',
]
export const SECONDARY_ATTRIBUTES = ['size', 'naturalArmor']
export const DERIVED_ATTRIBUTES = [
  'body', 'mind', 'spirit',
  'potency', 'reflex', 'resilience',
  'accuracy', 'might', 'toughness',
  'speed',

  'damageThresholdLight', 'damageThresholdDeep', 'damageThresholdDeath',

  'power',
]

const primaries = [
  ...PRIMARY_ATTRIBUTES.map((id) => {
    const name = id.replace(/^./, id.charAt(0).toUpperCase())
    return { id, computed: false, name, value: -1 }
  }),
  { id: 'size', computed: false, name: 'Size', value: 0, initialValue: 0 },
  { id: 'naturalArmor', computed: false, name: 'Natural Armor', value: 0, initialValue: 0 },
]

const Character = types
  .model('Character', {
    id: autoHash,
    name: 'Unnamed Character',
    rp: 0,
    xp: 0,

    primaryAttributes: types.optional(types.array(Attribute), primaries),

    // effects: types.array(Effect, []),
    equipment: types.optional(types.array(types.union(Armor, Item, Weapon)), []),
    skills: types.optional(types.array(Skill), []),
    traits: types.optional(types.array(Trait), []),
  }).views((my) => {
    const attr = id => (my.attribute(id) || {}).value || 0
    const attrs = (...ids) => ids.map(id => attr(id))

    /* eslint-disable max-len, object-property-newline */
    const computedAttributes = [
      Attribute.create({ id: 'accuracy', value: () => average(attrs('acuity', 'focus', 'intuition')), name: 'Accuracy' }),
      Attribute.create({ id: 'body', value: () => average(attrs('strength', 'agility', 'fitness')), name: 'Body' }),
      Attribute.create({ id: 'might', value: () => attr('size') + average(attrs('strength', 'fitness')), name: 'Might' }),
      Attribute.create({ id: 'mind', value: () => average(attrs('intellect', 'acuity', 'focus')), name: 'Mind' }),
      Attribute.create({ id: 'potency', value: () => average(attrs('strength', 'intellect', 'confidence')), name: 'Potency' }),
      Attribute.create({ id: 'reflex', value: () => average(attrs('agility', 'acuity', 'intuition')), name: 'Reflex' }),
      Attribute.create({ id: 'resilience', value: () => average(attrs('fitness', 'focus', 'devotion')), name: 'Resilience' }),
      Attribute.create({ id: 'speed', value: () => sum(6, attr('size'), Math.round(attr('fitness') / 2)), name: 'Speed' }),
      Attribute.create({ id: 'spirit', value: () => average(attrs('confidence', 'intuition', 'devotion')), name: 'Spirit' }),
      Attribute.create({ id: 'toughness', value: () => average(attrs('strength', 'fitness', 'size')) + sum(attrs('naturalArmor', 'armor')), name: 'Toughness' }),
      Attribute.create({ id: 'damageThresholdLight', value: () => bound(sum(attrs('size', 'strength', 'fitness', 'armor', 'naturalArmor')), { min: 1 }), name: 'Light' }),
      Attribute.create({ id: 'damageThresholdDeep', value: () => attr('light') * 2, name: 'Deep' }),
      Attribute.create({ id: 'damageThresholdDeath', value: () => attr('light') * 4, name: 'Death' }),
    ]
    /* eslint-enable max-len, object-property-newline */

    return {
      get attributes() { return [...my.primaryAttributes, ...computedAttributes] },
      get attributeIds() {
        return [
          ...my.primaryAttributes.map(a => a.id),
          ...computedAttributes.map(a => a.id),
        ]
      },
      get armor() { return 0 },
      get equipped() { return my.equipment.filter(e => e.equipped) },
      get power() {
        return sum(...[
          my.primaryAttributes.map(a => a.xpCost),
          my.skills.map(s => s.xpCost),
          my.traits.map(s => s.xpCost),
        ])
      },
    }
  }).actions(my => ({
    /* eslint-disable no-param-reassign */
    attribute(id) { return my.attributes.find(a => a.id === id) },
    setAttribute(id, value) { my.attribute(id).setValue(value) },
    setXP(xp) { my.xp = xp },
    setRP(rp) { my.rp = rp },
    /* eslint-enable no-param-reassign */
  }))

export default Character
