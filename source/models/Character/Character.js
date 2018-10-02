import { types } from 'mobx-state-tree'
import Attribute from '@/models/Attribute'
import Descriptor from '@/models/Descriptor'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import HealthLevel from '@/models/HealthLevel'
import Item from '@/models/Item'
import Resource from '@/models/Resource'
import Skill from '@/models/Skill'
import Spell from '@/models/Spell'
import Trait from '@/models/Trait'
import flatten from '@/utilities/flatten'

export default types.compose(
  IEditable,
  types.model({
    attributes: CollectionOf(Attribute),
    conditions: CollectionOf(types.string), // ['vs Goblins', 'Crinos Form']
    descriptors: CollectionOf(Descriptor),
    experience: 0,
    health: types.maybe(types.union(types.number, CollectionOf(HealthLevel))),
    items: CollectionOf(Item), // equipped / unequipped, have Effects
    resources: CollectionOf(Resource),
    skills: CollectionOf(Skill),
    spells: CollectionOf(Spell),
    traits: CollectionOf(Trait), // have Effects
  }).volatile(() => ({
    isCharacter: true,
  })).views(self => ({
    get activeEffects() {
      return self.effects.filter(effect => effect && effect.isApplicable)
    },
    get effects() {
      return flatten([
        // Trait Effects first, because they're inherent
        flatten(self.traits.map(trait => trait.effects.asArray)),
        // Direct Effects second, because they're cast on the character
        flatten(self.spells.filter(spell => spell.isActive).map(spell => spell.effects.asArray)),
        // Item Effects third, because they're indirect
        flatten(self.items.filter(item => item.equipped).map(item => item.effects.asArray)),
      ]).filter(Boolean)
    },
  }))
).named('Character')
