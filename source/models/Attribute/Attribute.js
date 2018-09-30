import { getParent, types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import findMapKey from '@/utilities/findMapKey'
import findParent from '@/utilities/findParent'
import { sum } from '@/utilities/math'

export default types.compose(
  IEditable,
  types.model({
    displayName: '',
    value: 0,
  }).views((self) => {
    let character
    let attributeMap

    return {
      afterAttach() {
        try { character = findParent(self, p => p.isCharacter) } catch (e) {}
        try { attributeMap = getParent(self) } catch (e) {} // self => c.attributes map
      },
      get displayValue() { return self.value + self.modifier },
      get key() { return findMapKey(attributeMap, self) },
      get modifiedBy() {
        if (!character) return []
        return character.activeEffects.filter(effect => effect.modifies === self.key)
      },
      get modifier() { return sum(self.modifiedBy.map(effect => effect.modifier)) },
      get modifierText() {
        return self.modifiedBy.map(effect => `${effect.sourceName}: ${effect.modifier}`).join(', ')
      },
    }
  })
).named('Attribute')
