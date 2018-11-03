import { types } from 'mobx-state-tree'
import Effect from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'
import ICategorizable from '@/models/generic/ICategorizable'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'
import ResourceCost from '@/models/ResourceCost'
import findParent from '@/utilities/findParent'

export default types.compose(
  IIdentity,
  ICategorizable,
  IEditable,
  types.model({
    costs: CollectionOf(ResourceCost), // Resources
    description: '',
    effects: CollectionOf(Effect),
    isActive: false,
    level: 0,
    name: 'New Spell...',
  }).views(self => ({
    get character() { return findParent(self, p => p.isCharacter) },
  })).actions(self => ({
    cast() {
      if (self.isAffordable()) {
        self.costs.forEach((cost) => {
          const resource = cost.resource()
          resource.set({ current: resource.current - cost.amount })
        })
      }
    },
    isAffordable() {
      if (!self.character || !self.costs.length) return true
      return self.costs.every(cost => (
        cost.resource() && cost.resource().current >= cost.amount
      ))
    },
  }))
).named('Spell')
