import Character from '@/models/Character'
// import Health from '@/models/Health'

const create = (levels) => {
  const character = Character.create({ health: levels })
  return character.health
}

beforeEach(() => {
  jest.clearAllMocks()
})

it('defaults to ok correctly', () => {
  const health = create()
  expect(health.max).toBe(4)
  expect(health.levels.toJS()).toEqual(Array(4).fill('ok'))
})

it('sorts wound levels: bane, heavy, light, ok', () => {
  const levels = ['ok', 'heavy', 'bane', 'light']
  const health = create({ levels })
  expect(health.levels.toJS()).toEqual(['ok', 'light', 'heavy', 'bane'])
})

it('computes total wound level', () => {
  const health = create({ levels: ['bane', 'heavy', 'light', 'ok'] })
  expect(health.damage).toEqual(3)
})

it('limits levels to max health', () => {
  const health = create({ levels: Array(9).fill('ok') })
  expect(health.levels.toJS().length).toBe(health.max)
})

it('sets levels correctly', () => {
  const health = create()
  expect(health.levels.toJS()).toEqual(Array(health.max).fill('ok'))

  health.setLevel(2, 'heavy')
  expect(health.levels.toJS()).toEqual(
    ['ok', 'heavy', 'heavy', 'heavy']
  )

  health.setLevel(3, 'bane')
  expect(health.levels.toJS()).toEqual(
    ['ok', 'heavy', 'bane', 'bane']
  )

  health.setLevel(1, 'light')
  expect(health.levels.toJS()).toEqual(
    ['light', 'heavy', 'bane', 'bane']
  )

  health.setLevel(2, 'light')
  expect(health.levels.toJS()).toEqual(
    ['light', 'light', 'bane', 'bane']
  )

  health.setLevel(4, 'ok')
  expect(health.levels.toJS()).toEqual(Array(health.max).fill('ok'))
})

it('heal(level) heals', () => {
  const health = create()
  health.setLevel(1, 'heavy')
  expect(health.levels.toJS()).toEqual(['heavy', 'heavy', 'heavy', 'heavy'])

  health.heal(2)
  expect(health.levels.toJS()).toEqual(['ok', 'ok', 'heavy', 'heavy'])

  health.heal() // should heal 1
  expect(health.levels.toJS()).toEqual(['ok', 'ok', 'ok', 'heavy'])

  health.heal(5) // healing more damage than remains
  expect(health.levels.toJS()).toEqual(Array(health.max).fill('ok'))
})

it('healAll heals all damage', () => {
  const levels = ['bane', 'bane', 'bane', 'bane', 'bane', 'bane', 'bane']
  const health = create({ levels })
  expect(health.levels.toJS()).toEqual(Array(health.max).fill('bane'))

  health.healAll()
  expect(health.levels.toJS()).toEqual(Array(health.max).fill('ok'))
})
