import Skill from './Skill'
import { randomHash } from '../utilities/hash'

it('defaults correctly', () => {
  const s = Skill.create({ id: randomHash() })

  expect(s.name).toBe('New Skill')
  expect(s.theory).toBe(0)
  expect(s.mastery).toBe(1)
})

it('allows setting theory', () => {
  const s = Skill.create({ id: randomHash() })

  expect(s.theory).toBe(0)
  s.setTheory(2)
  expect(s.theory).toBe(2)
})
