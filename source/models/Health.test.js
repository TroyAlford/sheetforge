import * as MST from 'mobx-state-tree'
import Health from '@/models/Health'

jest.unmock('mobx-state-tree')
const getAttribute = jest.fn(() => ({ value: 1 }))
const getParent = jest.fn(() => ({ attribute: getAttribute }))
MST.getParent = getParent

beforeEach(() => {
  jest.clearAllMocks()
})

it('defaults to ok correctly', () => {
  const health = Health.create()
  expect(health.max).toBe(7)
  expect(health.levels.toJS()).toEqual(Array(7).fill('ok'))
})

it('sorts wound levels: bane, heavy, light, ok', () => {
  const levels = ['bane', 'heavy', 'bane', 'heavy', 'light', 'ok', 'light']
  const health = Health.create({ levels })
  expect(health.max).toBe(7)
  expect(health.levels.toJS()).toEqual(['bane', 'bane', 'heavy', 'heavy', 'light', 'light', 'ok'])
})

it('computes total wound level', () => {
  const health = Health.create({ levels: ['bane', 'bane', 'heavy', 'light', 'light'] })
  expect(health.max).toBe(7)
  expect(health.damage).toEqual(5)
})

it('limits levels to max health', () => {
  const health = Health.create({ bane: 9 })
  expect(health.levels.toJS().length).toBe(health.max)
  expect(health.levels.toJS().every(l => l === 'bane'))
})

it('sets levels correctly', () => {
  const health = Health.create()
  expect(health.levels.toJS()).toEqual(Array(7).fill('ok'))

  health.setLevel(3, 'heavy')
  expect(health.levels.toJS()).toEqual(
    ['heavy', 'heavy', 'heavy', 'ok', 'ok', 'ok', 'ok']
  )

  health.setLevel(2, 'bane')
  expect(health.levels.toJS()).toEqual(
    ['bane', 'bane', 'heavy', 'ok', 'ok', 'ok', 'ok']
  )

  health.setLevel(5, 'light')
  expect(health.levels.toJS()).toEqual(
    ['bane', 'bane', 'heavy', 'light', 'light', 'ok', 'ok']
  )

  health.setLevel(2, 'light')
  expect(health.levels.toJS()).toEqual(
    ['bane', 'light', 'ok', 'ok', 'ok', 'ok', 'ok']
  )

  health.setLevel(1, 'ok')
  expect(health.levels.toJS()).toEqual(Array(7).fill('ok'))
})

it('heal(level) heals', () => {
  const health = Health.create()
  health.setLevel(5, 'heavy')
  expect(health.levels.toJS()).toEqual(['heavy', 'heavy', 'heavy', 'heavy', 'heavy', 'ok', 'ok'])

  health.heal(2)
  expect(health.levels.toJS()).toEqual(['heavy', 'heavy', 'heavy', 'ok', 'ok', 'ok', 'ok'])

  health.heal() // should heal 1
  expect(health.levels.toJS()).toEqual(['heavy', 'heavy', 'ok', 'ok', 'ok', 'ok', 'ok'])

  health.heal(5) // healing more damage than remains
  expect(health.levels.toJS()).toEqual(Array(7).fill('ok'))
})

it('healAll heals all damage', () => {
  const levels = ['bane', 'bane', 'bane', 'bane', 'bane', 'bane', 'bane']
  const health = Health.create({ levels })
  expect(health.levels.toJS()).toEqual(levels)

  health.healAll()
  expect(health.levels.toJS()).toEqual(Array(7).fill('ok'))
})
