import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import findParent from '@/utilities/findParent'
import { sum } from '@/utilities/math'

export default types.compose(
  IEditable,
  types.model({
    name: types.identifier,
    value: 0,
  }).volatile(() => ({
    character: null,
  })).views(self => ({
    get displayValue() { return self.value + self.modifier },
    get effects() {
      if (!self.character) return []
      return self.character.activeEffects.filter(effect => effect.target === self)
    },
    get modifier() { return sum(self.effects.map(effect => effect.modifier)) },
    get modifierText() {
      return self.effects.map(({ modifier, sourceName }) => `${sourceName}: ${modifier}`).join(', ')
    },
  })).actions(self => ({
    afterAttach() {
      // eslint-disable-next-line no-param-reassign
      try { self.character = findParent(self, p => p.isCharacter) } catch (e) { }
    },
  }))
).named('Attribute')
