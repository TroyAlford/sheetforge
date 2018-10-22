import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import findParent from '@/utilities/findParent'
import { sum } from '@/utilities/math'

export default types.compose(
  IEditable,
  types.model({
    name: types.identifier,
    value: 0,
  }).views(self => ({
    get character() { return findParent(self, p => p.isCharacter) },
  })).actions(self => ({
    displayValue() { return self.value + self.modifier() },
    effects() {
      if (!self.character) return []
      return self.character.activeEffects().filter(effect => effect.target === self)
    },
    modifier() { return sum(self.effects().map(effect => effect.modifier)) },
    modifierText() {
      return self.effects().map(effect => `${effect.sourceName}: ${effect.modifier}`).join(', ')
    },
  }))
).named('Attribute')
