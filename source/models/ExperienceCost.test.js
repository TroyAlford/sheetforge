import { types } from 'mobx-state-tree'
import ExperienceCost from './ExperienceCost'

it('calculates xpCost', () => {
  const Model = types.compose(
    types.model({ foo: 3 }),
    ExperienceCost(self => self.foo ** self.foo)
  )
  const model = Model.create()

  expect(model.foo).toBe(3)
  expect(model.xpCost).toBe(27)
})
