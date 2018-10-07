import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import findParent from '@/utilities/findParent'
import { sum } from '@/utilities/math'

export default types.compose(
  IEditable,
  types.model({
    displayName: types.identifier,
    value: 0,
  }).views((self) => {
    let character

    return {
      afterAttach() {
        try { character = findParent(self, p => p.isCharacter) } catch (e) {}
      },
      get displayValue() { return self.value + self.modifier },
      get effects() {
        if (!character) return []
        return character.activeEffects.filter(effect => effect.target === self)
      },
      get modifier() { return sum(self.effects.map(effect => effect.modifier)) },
      get modifierText() {
        return self.effects.map(({ modifier, sourceName }) => `${sourceName}: ${modifier}`).join(', ')
      },
    }
  })
).named('Attribute')
