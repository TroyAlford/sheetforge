import * as math from '@/utilities/math'

describe('sum()', () => {
  it('adds numbers', () => {
    expect(math.sum(1, 2)).toBe(3)
    expect(math.sum(-1, -2)).toBe(-3)
    expect(math.sum(1, -1)).toBe(0)
    expect(math.sum(1, 2, 3, 4, 5)).toBe(15)
    expect(math.sum([1, 2, 3, 4, 5])).toBe(15)
  })
})

it('average() finds the rounded average', () => {
  expect(math.average(1, 2, 3)).toBe(2)
  expect(math.average(1, 2)).toBe(2)
  expect(math.average([1, 2, 3])).toBe(2)
})

