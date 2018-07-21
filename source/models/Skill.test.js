import Skill from '@/models/Skill'
import { randomHash } from '@/utilities/hash'

beforeAll(() => {
  console.warn = jest.fn()
})

it('defaults correctly', () => {
  const s = Skill.create({ id: randomHash() })

  expect(s.name).toBe('New Skill')
  expect(s.theory).toBe(0)
  expect(s.mastery).toBe(0)
})

it('allows setting theory', () => {
  const s = Skill.create({ id: randomHash() })

  expect(s.theory).toBe(0)
  s.setTheory(2)
  expect(s.theory).toBe(2)
})

it('computes xp cost correctly', () => {
  const s = Skill.create({ mastery: 1 })
  expect(s.theory).toBe(0)
  expect(s.mastery).toBe(1)
  expect(s.xpCost).toBe(3) // Th(0x3) = 0, Ms(1x3) = 3

  s.setTheory(1)
  expect(s.xpCost).toBe(6) // Th (1x3) = 3, Ms (1x3) = 3

  s.setTheory(2)
  expect(s.xpCost).toBe(12) // Th (1x3 + 2x3) = 9, Ms (1x3) = 3

  s.setMastery(2)
  expect(s.xpCost).toBe(18) // Th (1x3 + 2x3) = 9, Ms(1x3 + 2x3) = 9
})
