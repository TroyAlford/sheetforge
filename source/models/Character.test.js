import Character, { PRIMARY_ATTRIBUTES, SECONDARY_ATTRIBUTES } from './Character'

jest.unmock('./Character')

it('defaults main attributes correctly', () => {
  const c = Character.create()
  PRIMARY_ATTRIBUTES.forEach((attr) => { expect(c[attr]).toBe(-1) })
  SECONDARY_ATTRIBUTES.forEach((attr) => { expect(c[attr]).toBe(0) })
})

it('assigns main attributes correctly', () => {
  const c = Character.create({
    strength: 1,
    intellect: 1,
    confidence: 1,
    agility: 1,
    acuity: 1,
    intuition: 1,
    fitness: 1,
    focus: 1,
    devotion: 1,
    size: 1,
    naturalArmor: 1,
  })

  PRIMARY_ATTRIBUTES.forEach((attr) => { expect(c[attr]).toBe(1) })
  SECONDARY_ATTRIBUTES.forEach((attr) => { expect(c[attr]).toBe(1) })
})

it('calculates derived attributes correctly', () => {
  const c = Character.create({
    strength: 1,
    intellect: 0,
    confidence: 2,
    agility: 0,
    acuity: 0,
    intuition: 1,
    fitness: 2,
    focus: 0,
    devotion: 2,
  })

  expect(c.body).toBe(1)
  expect(c.mind).toBe(0)
  expect(c.spirit).toBe(2)
  expect(c.potency).toBe(1)
  expect(c.reflex).toBe(0)
  expect(c.resilience).toBe(1)
  expect(c.speed).toBe(7)
  expect(c.accuracy).toBe(0)
  expect(c.might).toBe(2)
  expect(c.toughness).toBe(1)
})
