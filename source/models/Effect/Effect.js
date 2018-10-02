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
    modifies: '',
  }).views((self) => {
    let character
    let source

    return ({
      afterAttach() {
        character = findParent(self, p => p.isCharacter)
        source = findParent(self, p => p.displayName)
      },
      get availableTargets() {
        if (!character) return CollectionOf(Attribute).create([])
        return character.attributes
      },
      get isApplicable() {
        return Boolean(
          !self.condition || (character && character.conditions.includes(self.condition))
        )
      },
      get source() { return source || { displayName: 'Unknown', id: self.modifies } },
      get sourceName() { return self.source.displayName },
    })
  })
).named('Effect')
