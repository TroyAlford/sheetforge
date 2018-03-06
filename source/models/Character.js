import { types } from 'mobx-state-tree'
import { autoHash } from '@/utilities/types'
import { average, sum } from '@/utilities/math'
import bound from '@/utilities/bound'
import Attribute from '@/models/Attribute'
import Armor from '@/models/Armor'
import Descriptor from '@/models/Descriptor'
import Item from '@/models/Item'
import Health from '@/models/Health'
import Skill from '@/models/Skill'
import Trait from '@/models/Trait'
import Weapon from '@/models/Weapon'

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

export const DEFAULT_DESCRIPTORS = [
  'age', 'concept', 'eyes', 'gender', 'hair',
  'height', 'homeland', 'race', 'weight',
]

const capitalize = s => s.replace(/^./, s.charAt(0).toUpperCase())

const primaries = PRIMARY_ATTRIBUTES.map(id => (
  { id, computed: false, name: capitalize(id), value: -1 }
))
const secondaries = [
  { id: 'size', name: 'Size', value: 0 },
  { id: 'naturalArmor', name: 'N. Armor', value: 0 },
]
const descriptors = DEFAULT_DESCRIPTORS.map(id => (
  { id, name: capitalize(id), value: '' }
))

const Character = types
  .model('Character', {
    id: autoHash,
    name: 'Unnamed Character',
    rp: 0,
    xp: 0,

    portraitURL: '',
    primaryAttributes: types.optional(types.array(Attribute), primaries),
    secondaryAttributes: types.optional(types.array(Attribute), secondaries),
    descriptors: types.optional(types.array(Descriptor), descriptors),
    // effects: types.array(Effect, []),
    equipment: types.optional(types.array(types.union(Armor, Item, Weapon)), []),
    health: types.optional(Health, {}),
    skills: types.optional(types.array(Skill), []),
    traits: types.optional(types.array(Trait), []),
  }).views((my) => {
    const attr = id => (my.attribute(id) || {}).value || 0
    const attrs = (...ids) => ids.map(id => attr(id))

    /* eslint-disable max-len, object-property-newline */
    const computedAttributes = [
      Attribute.create({ id: 'body', value: () => average(attrs('agility', 'fitness', 'strength')), name: 'Body' }),
      Attribute.create({ id: 'mind', value: () => average(attrs('acuity', 'focus', 'intellect')), name: 'Mind' }),
      Attribute.create({ id: 'potency', value: () => average(attrs('confidence', 'intellect', 'strength')), name: 'Potency' }),
      Attribute.create({ id: 'reflex', value: () => average(attrs('acuity', 'agility', 'intuition')), name: 'Reflex' }),
      Attribute.create({ id: 'resilience', value: () => average(attrs('devotion', 'fitness', 'focus')), name: 'Resilience' }),
      Attribute.create({ id: 'speed', value: () => sum(6, attr('size'), Math.round(attr('fitness') / 2)), name: 'Speed' }),
      Attribute.create({ id: 'spirit', value: () => average(attrs('confidence', 'devotion', 'intuition')), name: 'Spirit' }),
      Attribute.create({
        id: 'damageThresholdLight',
        name: 'Light',
        value: () => (my.armorRating + bound(sum(attrs('fitness', 'size', 'strength')), { min: 1 })),
      }),
      Attribute.create({ id: 'damageThresholdDeep', value: () => attr('damageThresholdLight') * 2, name: 'Deep' }),
      Attribute.create({ id: 'damageThresholdDeath', value: () => attr('damageThresholdLight') * 4, name: 'Death' }),
    ]
    /* eslint-enable max-len, object-property-newline */

    return {
      get attributes() {
        return [
          ...my.primaryAttributes,
          ...my.secondaryAttributes,
          ...computedAttributes,
        ]
      },
      get attributeIds() {
        return [
          ...my.primaryAttributes.map(a => a.id),
          ...computedAttributes.map(a => a.id),
        ]
      },
      get armor() { return my.equipment.filter(e => Armor.is(e)) },
      get armorRating() {
        return attr('naturalArmor') + sum(my.armor.map(e => (e.equipped ? e.rating : 0)))
      },
      get equipped() { return my.equipment.filter(e => e.equipped) },
      get power() {
        return sum([
          ...my.primaryAttributes.map(a => a.xpCost),
          ...my.skills.map(s => s.xpCost),
          ...my.traits.map(s => s.xpCost),
        ])
      },
      get weapons() { return my.equipment.filter(e => Weapon.is(e)) },
    }
  }).actions(my => ({
    /* eslint-disable no-param-reassign */
    addArmor() { my.equipment.push(Armor.create()) },
    addItem() { my.equipment.push(Item.create()) },
    addSkill() { my.skills.push(Skill.create()) },
    addTrait() { my.traits.push(Trait.create()) },
    addWeapon() { my.equipment.push(Weapon.create()) },
    attribute(id) { return my.attributes.find(a => a.id === id) },
    removeItem(item) { return my.equipment.remove(item) },
    removeSkill(skill) { return my.skills.remove(skill) },
    removeTrait(trait) { return my.traits.remove(trait) },
    setAttribute(id, value) { my.attribute(id).setValue(value) },
    setName(name) { my.name = name },
    setPortraitURL(url) { my.portraitURL = url },
    setXP(xp) { my.xp = xp },
    setRP(rp) { my.rp = rp },
    /* eslint-enable no-param-reassign */
  }))

export default Character
