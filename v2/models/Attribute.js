import { getParent, types } from 'mobx-state-tree'
import findMapKey from '@/utilities/findMapKey'
import { sum } from '@/utilities/math'

export default types.model({
  displayName: '',
  value: 0,
}).views((self) => {
  let character
  let attributeMap

  return {
    afterAttach() {
      try { character = getParent(self, 2) } catch (e) {} // self => c.attributes map => character
      try { attributeMap = getParent(self) } catch (e) {} // self => c.attributes map
    },
    get displayValue() { return self.value + self.modifier },
    get key() { return findMapKey(attributeMap, self) },
    get modifier() {
      if (!character) return 0
      return sum(character.activeEffects.map(effect => effect.modifierFor(self.key)))
    },
  }
})
