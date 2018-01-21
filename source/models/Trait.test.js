import Trait from './Trait'

it('defaults and sets name', () => {
  const a = Trait.create()
  expect(a.name).toBe('New Trait')

  a.setName('Foo!')
  expect(a.name).toBe('Foo!')

  const b = Trait.create({ name: 'foo' })
  expect(b.name).toBe('foo')
})

it('defaults and sets value', () => {
  const a = Trait.create()
  expect(a.value).toBe(0)

  a.setValue(1)
  expect(a.value).toBe(1)

  const b = Trait.create({ value: 3 })
  expect(b.value).toBe(3)
})

it('computes xp cost correctly', () => {
  const a = Trait.create({ value: 1 })
  expect(a.xpCost).toBe(1)

  a.setValue(2)
  expect(a.xpCost).toBe(2)
})
