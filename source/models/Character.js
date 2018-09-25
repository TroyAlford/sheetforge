import { types } from 'mobx-state-tree'
import Attribute from './Attribute'
import Descriptor from './Descriptor'
import Effect from './Effect'
import HealthLevel from './HealthLevel'
import Item from './Item'
import Resource from './Resource'
import Skill from './Skill'
import Spell from './Spell'
import Trait from './Trait'
import IEditable from '@/models/generic/IEditable'
import flatten from '@/utilities/flatten'

export default types.compose(
  IEditable,
  types.model({
    attributes: types.map(Attribute),
    conditions: types.array(types.string), // ['vs Goblins', 'Crinos Form']
    descriptors: types.array(Descriptor),
    effects: types.array(Effect), // active/inactive, buffs Attribute OR Conditional
    experience: 0,
    health: types.maybe(types.union(types.number, types.array(HealthLevel))),
    items: types.array(Item), // equipped / unequipped, have Effects
    resources: types.map(Resource),
    skills: types.array(Skill),
    spells: types.array(Spell),
    traits: types.array(Trait), // have Effects
  }).volatile(() => ({
    isCharacter: true,
  })).views(self => ({
    get activeEffects() {
      return [
        // Trait Effects first, because they're inherent
        ...self.activeTraitEffects,
        // Direct Effects second, because they're cast on the character
        ...self.effects.filter(effect => effect.isActive && effect.isApplicable),
        // Item Effects third, because they're indirect
        ...self.activeItemEffects,
      ].filter(Boolean)
    },
    get activeItemEffects() {
      // item effects are active if item is equipped
      return flatten(
        self.items
          .filter(item => item.equipped)
          .map(item => item.effects.filter(effect => effect.isApplicable))
      )
    },
    get activeTraitEffects() {
      // trait effects are active all the time
      return flatten(
        self.traits.map(trait => (
          trait.effects.filter(effect => effect.isApplicable)
        ))
      )
    },
  }))
).named('Character')
