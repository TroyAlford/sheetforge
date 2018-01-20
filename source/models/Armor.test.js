import Armor from './Armor'

it('defaults to 0 for all values', () => {
  const a = Armor.create()

  expect(a.id).toHaveLength(8)
  expect(a.name).toBe('Unnamed Armor')
  expect(a.values.toJS()).toEqual([0, 0, 0, 0, 0, 0])
  expect(a.average).toBe(0)
})

it('allows setting name', () => {
  const a = Armor.create()

  expect(a.name).toBe('Unnamed Armor')
  a.setName('Foo!')
  expect(a.name).toBe('Foo!')
})

it('allows setting values', () => {
  const a = Armor.create()

  expect(a.values.toJS()).toEqual([0, 0, 0, 0, 0, 0])
  a.setValues([1, 2, 3, 4, 5, 6])
  expect(a.values.toJS()).toEqual([1, 2, 3, 4, 5, 6])
})
