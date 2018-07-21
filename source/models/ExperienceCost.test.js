import { types } from 'mobx-state-tree'
import ExperienceCost from '@/models/ExperienceCost'

const SimpleModel = types.model({
  xp: 0,
  value: 0,
}).actions(self => ({
  /* eslint-disable no-param-reassign */
  setValue(value) { self.value = value },
  setXP(value) { self.xp = value },
  /* eslint-enable no-param-reassign */
}))

const ValueSquaredModel = types.compose(
  SimpleModel,
  ExperienceCost(self => self.value ** 2)
)

it('calculates xpCost', () => {
  const model = ValueSquaredModel.create({ value: 3 })
  expect(model.value).toBe(3)
  expect(model.xpCost).toBe(9)
})

it('calculates xpCostAfter & xpCostDelta', () => {
  const model = ValueSquaredModel.create({ value: 2 })
  const fn = (self) => { self.setValue(3) }
  expect(model.xpCost).toBe(4)
  expect(model.xpCostAfter(fn)).toBe(9)
  expect(model.xpCostDelta(fn)).toBe(5)
})
