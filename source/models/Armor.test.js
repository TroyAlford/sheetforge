import Armor from '@/models/Armor'

it('correctly defaults & sets name', () => {
  const a = Armor.create()

  expect(a.name).toBe('New Armor')
  a.setName('Foo!')
  expect(a.name).toBe('Foo!')
})

it('defaults to rating 0', () => {
  const a = Armor.create()
  expect(a.rating).toBe(0)
})
