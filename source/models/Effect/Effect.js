import { types } from 'mobx-state-tree'
import Attribute from '@/models/Attribute'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import findParent from '@/utilities/findParent'

export default types.compose(
  IEditable,
  types.model({
    condition: '',
    modifier: 0,
    targetName: '',
  }).views(self => ({
    get availableTargets() {
      return self.character ? self.character.attributes : CollectionOf(Attribute).create([])
    },
    get character() { return findParent(self, p => p.isCharacter) },
    get isApplicable() {
      return Boolean(
        !self.condition ||
        (self.character && self.character.conditions.includes(self.condition))
      )
    },
    get source() { return findParent(self, p => p.name) || null },
    get sourceName() { return self.source ? self.source.name : 'Unknown' },
    get target() {
      if (!self.character) return null
      return self.character.attributes.findBy('name', self.targetName)
    },
  }))
).named('Effect')
