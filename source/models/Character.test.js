import Character, { PRIMARY_ATTRIBUTES, SECONDARY_ATTRIBUTES } from '@/models/Character'

const attr = (id, value) => ({ id, computed: false, name: '', value })

it('defaults primary attributes correctly', () => {
  const c = Character.create()

  PRIMARY_ATTRIBUTES.forEach((id) => { expect(c.attribute(id).value).toBe(-1) })
  SECONDARY_ATTRIBUTES.forEach((id) => { expect(c.attribute(id).value).toBe(0) })
})

it('assigns main attributes correctly', () => {
  const c = Character.create({
    primaryAttributes: [attr('agility', 5), attr('fitness', 5), attr('strength', 5)],
  })

  expect(c.attribute('agility').value).toBe(5)
  expect(c.attribute('fitness').value).toBe(5)
  expect(c.attribute('strength').value).toBe(5)
})

it('computes secondary values correctly', () => {
  const c = Character.create({
    primaryAttributes: [
      attr('acuity', 1),
      attr('agility', 2),
      attr('confidence', 0),
      attr('devotion', 0),
      attr('fitness', 2),
      attr('focus', 1),
      attr('intellect', 1),
      attr('intuition', 0),
      attr('strength', 2),
      attr('size', 1),
      attr('naturalArmor', 1),
    ],
  })

  expect(c.attribute('body').value).toBe(2)
  expect(c.attribute('mind').value).toBe(1)
  expect(c.attribute('potency').value).toBe(1)
  expect(c.attribute('reflex').value).toBe(1)
  expect(c.attribute('resilience').value).toBe(1)
  expect(c.attribute('speed').value).toBe(8)
  expect(c.attribute('spirit').value).toBe(0)
})

it('allows assigning primary attribute values', () => {
  const c = Character.create({ xp: 1000 })
  expect(c.attribute('strength').value).toBe(-1)
  expect(c.attribute('strength').type).toBe('primary')

  c.attribute('strength').setValue(3)
  expect(c.attribute('strength').value).toBe(3)

  c.setAttribute('strength', 2)
  expect(c.attribute('strength').value).toBe(2)
})
it('rejects assigning computed attribute values', () => {
  const c = Character.create()
  expect(c.attribute('body').value).toBe(-1)
  expect(c.attribute('body').type).toBe('computed')

  expect(() => c.setAttribute('body', 2)).toThrow(/is not a function/)
})
