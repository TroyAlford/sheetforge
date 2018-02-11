import Skill from '@/models/Skill'
import { randomHash } from '@/utilities/hash'

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
  expect(s.xpCost).toBe(2) // 1 + (0 ^ 2) + (1 ^ 2)

  s.setTheory(1)
  expect(s.xpCost).toBe(3) // 1 + (1 ^ 2) + (1 ^ 2)

  s.setTheory(2)
  expect(s.xpCost).toBe(7) // 1 + (2 ^ 2) + (1 ^ 2)

  s.setMastery(2)
  expect(s.xpCost).toBe(11) // 1 + (2 ^ 2) + (2 ^ 2)
})
