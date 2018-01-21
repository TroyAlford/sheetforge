import { types } from 'mobx-state-tree'
import ExperienceCost from './ExperienceCost'

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

describe('guards specified setters', () => {
  const GuardedModel = types.compose(
    SimpleModel,
    ExperienceCost(self => self.value ** 2, ['setValue'], 0)
  )
  const model = GuardedModel.create({ value: 0, xp: 4 })

  expect(model.value).toBe(0)
  expect(model.xpCost).toBe(0)
  expect(model.xp).toBe(4)

  model.setValue(2)
  expect(model.value).toBe(2)
  expect(model.xpCost).toBe(4)
  expect(model.xp).toBe(0)

  model.setValue(4)
  expect(model.value).toBe(2) // setValue was canceled
  expect(model.xpCost).toBe(4)
})
