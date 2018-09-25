import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import findParent from '@/utilities/findParent'

export default types.compose(
  IEditable,
  types.model({
    condition: types.maybe(types.string),
    displayName: types.string,
    isActive: false,
    modifies: types.map(types.number),
  }).views((self) => {
    let character

    return ({
      afterAttach() {
        try { character = findParent(self, p => p.isCharacter) } catch (e) {}
      },
      get isApplicable() {
        return Boolean(
          !self.condition || (
            character && character.conditions.includes(self.condition)
          )
        )
      },
      modifierFor(key) { return self.modifies.get(key) || 0 },
    })
  })
).named('Effect')
