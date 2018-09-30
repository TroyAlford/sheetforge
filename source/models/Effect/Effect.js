import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import findParent from '@/utilities/findParent'

export default types.compose(
  IEditable,
  types.model({
    condition: '',
    modifier: 0,
    modifies: types.string,
  }).views((self) => {
    let character
    let displayItem

    return ({
      afterAttach() {
        try { character = findParent(self, p => p.isCharacter) } catch (e) {}
        try { displayItem = findParent(self, p => p.displayName) } catch (e) { }
      },
      get availableTargets() { return character ? [...character.attributes.keys()] : [] },
      get isApplicable() {
        return Boolean(
          !self.condition || (character && character.conditions.includes(self.condition))
        )
      },
      get sourceName() { return displayItem ? displayItem.displayName : undefined },
    })
  })
).named('Effect')
