import { types } from 'mobx-state-tree'
import Attribute from '@/models/Attribute'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'
import findParent from '@/utilities/findParent'

export default types.compose(
  IIdentity,
  IEditable,
  types.model({
    condition: '',
    modifier: 0,
    targetName: '',
  }).actions(self => ({
    afterAttach() {
      if (!self.targetName && self.available().length) {
        // eslint-disable-next-line no-param-reassign
        self.targetName = self.available().first.name
      }
    },

    available() {
      const character = self.character()
      return character ? character.attributes : CollectionOf(Attribute).create([])
    },
    character() { return findParent(self, p => p.isCharacter) },
    isApplicable() {
      const character = self.character()
      return Boolean(
        !self.condition ||
        (character && character.conditions.includes(self.condition))
      )
    },
    source() { return findParent(self, p => p.name) || null },
    sourceName() { return self.source() ? self.source().name : 'Unknown' },
    target() {
      const character = self.character()
      return character ? character.attributes.findBy('name', self.targetName) : null
    },
  }))
).named('Effect')
