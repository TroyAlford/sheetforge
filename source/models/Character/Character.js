import { types } from 'mobx-state-tree'
import Attribute from '@/models/Attribute'
import Descriptor from '@/models/Descriptor'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'
import HealthLevel from '@/models/HealthLevel'
import Item from '@/models/Item'
import Resource from '@/models/Resource'
import Skill from '@/models/Skill'
import Spell from '@/models/Spell'
import Trait from '@/models/Trait'
import flatten from '@/utilities/flatten'

export default types.compose(
  IIdentity,
  IEditable,
  types.model({
    attributes: CollectionOf(Attribute),
    conditions: CollectionOf(types.string), // ['vs Goblins', 'Crinos Form']
    descriptors: CollectionOf(Descriptor),
    experience: 0,
    health: CollectionOf(HealthLevel),
    items: CollectionOf(Item), // equipped / unequipped, have Effects
    resources: CollectionOf(Resource),
    skills: CollectionOf(Skill),
    spells: CollectionOf(Spell),
    traits: CollectionOf(Trait), // have Effects
  }).volatile(() => ({
    isCharacter: true,
  })).actions(self => ({
    activeEffects() {
      return self.effects().filter(effect => effect && effect.isApplicable())
    },
    availableConditions() {
      return self.effects()
        .map(e => e.condition).concat(self.conditions.asArray)
        .sort()
        .filter((effect, i, all) => !i || effect !== all[i - 1])
        .filter(Boolean)
    },
    effects() {
      return flatten([
        // Trait Effects first, because they're inherent
        self.traits.filter(Boolean).map(trait => trait.effects.values),
        // Direct Effects second, because they're cast on the character
        self.spells.filter(spell => spell.isActive).map(spell => spell.effects.values),
        // Item Effects third, because they're indirect
        self.items.filter(item => item.equipped).map(item => item.effects.values),
      ]).filter(Boolean)
    },
  }))
).named('Character')
