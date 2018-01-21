import { types } from 'mobx-state-tree'

export default function ExperienceCost(fn) {
  return types.model({
  }).views(self => ({
    get xpCost() { return fn(self) },
  }))
}
