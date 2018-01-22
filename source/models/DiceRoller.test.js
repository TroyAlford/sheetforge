import DiceRoller from './DiceRoller'

function createMockDiceRoller(rolls = [], options = {}) {
  const roller = new DiceRoller(options)
  let current = 0
  roller.rollDie = () => {
    if (rolls[current]) return rolls[current++] // eslint-disable-line no-plusplus
    return rolls[rolls.length - 1]
  }
  return roller
}

it('rolls dice within range', () => {
  const roller = new DiceRoller()
  expect(roller.options.dieSides).toBe(6)

  Array.from(1000, (_, i) => i).forEach(() => {
    // Non-determinstic, but rollDie is a standard algorithm
    const roll = roller.rollDie()
    expect(roll >= 1)
    expect(roll <= roller.options.dieSides)
  })
})

describe('rollSum()', () => {
  it('sums values', () => {
    const roller = createMockDiceRoller([1, 2, 3, 4, 5, 6])
    expect(roller.rollSum(6)).toBe(21)
  })
})
describe('rollVsThreshold()', () => {
  it('calculates botch correctly', () => {
    const roller = createMockDiceRoller(
      [1, 2, 3, 4, 5, 6],
      { explodeOn: [], multiExplode: false }
    )

    expect(roller.rollVsThreshold(4, 5)).toEqual({
      rolls: [1, 2, 3, 4],
      successes: 0,
      failures: 1,
      isBotch: true,
    })
  })

  it('explodes 1 time if multiExplode = false', () => {
    const roller = createMockDiceRoller(
      [6, 6, 1, 1, 1],
      { explodeOn: [6], multiExplode: false }
    )

    expect(roller.rollVsThreshold(1, 5)).toEqual({
      rolls: [6, 6],
      successes: 2,
      failures: 0,
      isBotch: false,
    })
  })

  it('explodes repeatedly if multiExplode = true', () => {
    const roller = createMockDiceRoller(
      [6, 6, 6, 6, 1],
      { explodeOn: [6], multiExplode: true }
    )

    expect(roller.rollVsThreshold(1, 5)).toEqual({
      rolls: [6, 6, 6, 6, 1],
      successes: 4,
      failures: 1,
      isBotch: false,
    })
  })

  it('honors multiple explodeOn values', () => {
    const roller = createMockDiceRoller(
      [5, 6, 5, 1],
      { explodeOn: [5, 6], multiExplode: true }
    )

    expect(roller.rollVsThreshold(1, 5)).toEqual({
      rolls: [5, 6, 5, 1],
      successes: 3,
      failures: 1,
      isBotch: false,
    })
  })
})
