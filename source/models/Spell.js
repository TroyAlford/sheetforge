import { getParent, types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    cost: types.map(types.number), // Resources
    description: '',
    displayName: types.string,
    level: 0,
  }).volatile(() => ({
    character: null,
  })).views(self => ({
    get isAffordable() {
      if (!self.character) return true

      const costs = [...self.cost.entries()]
      return costs.length === costs.filter(([key, value]) => {
        const resource = self.character.resources.get(key)
        return Boolean(resource && resource.current >= value)
      }).length
    },
  })).actions(self => ({
    /* eslint-disable no-param-reassign */

    afterAttach() {
      // self => spell array => character
      try { self.character = getParent(self, 2) } catch (e) {}
    },
    cast() {
      if (self.character && self.isAffordable) {
        [...self.cost.entries()].forEach(([key, value]) => {
          const resource = self.character.resources.get(key)
          resource.set('current', resource.current - value)
        })
      }
    },

    /* eslint-enable no-param-reassign */
  }))
).named('Spell')
