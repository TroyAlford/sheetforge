import { types } from 'mobx-state-tree'
import Effect from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import ResourceCost from '@/models/ResourceCost'
import findParent from '@/utilities/findParent'

export default types.compose(
  IEditable,
  types.model({
    costs: CollectionOf(ResourceCost), // Resources
    description: '',
    effects: CollectionOf(Effect),
    isActive: false,
    level: 0,
    name: '',
  }).volatile(() => ({
    character: null,
  })).views(self => ({
    get isAffordable() {
      if (!self.character || self.costs.length === 0) return true
      return self.costs.asArray.every(({ amount, resource }) => (
        resource && resource.current >= amount
      ))
    },
  })).actions(self => ({
    /* eslint-disable no-param-reassign */

    afterAttach() {
      self.character = findParent(self, p => p.isCharacter)
    },
    cast() {
      if (self.isAffordable) {
        self.costs.forEach(({ amount, resource }) => {
          resource.set({ current: resource.current - amount })
        })
      }
    },

    /* eslint-enable no-param-reassign */
  }))
).named('Spell')
