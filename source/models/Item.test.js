import Item from '@/models/Item'

it('auto-generates ids', () => {
  const a = Item.create()
  expect(typeof a.id).toBe('string')
  expect(a.id.length >= 7)

  const b = Item.create({ id: '1234567' })
  expect(b.id).toBe('1234567')
})

it('correctly defaults & sets name', () => {
  const a = Item.create()
  expect(a.name).toBe('New Item')

  a.setName('Foo!')
  expect(a.name).toBe('Foo!')

  const b = Item.create({ name: 'foo' })
  expect(b.name).toBe('foo')
})

it('correctly defaults & sets description', () => {
  const a = Item.create()
  expect(a.description).toBe('')

  a.setDescription('Foo!')
  expect(a.description).toBe('Foo!')

  const b = Item.create({ description: 'foo' })
  expect(b.description).toBe('foo')
})

it('correctly defaults & sets worth', () => {
  const a = Item.create()
  expect(a.worth).toBe(0)

  a.setWorth(100)
  expect(a.worth).toBe(100)

  const b = Item.create({ worth: 10 })
  expect(b.worth).toBe(10)
})
