import Armor, { REGION } from './Armor'

it('correctly defaults & sets name', () => {
  const a = Armor.create()

  expect(a.name).toBe('New Armor')
  a.setName('Foo!')
  expect(a.name).toBe('Foo!')
})

it('defaults to 0 for all values', () => {
  const a = Armor.create()

  expect(a.values.toJS()).toEqual([0, 0, 0, 0, 0, 0])
  expect(a.average).toBe(0)
})

it('allows setting values', () => {
  const a = Armor.create()

  expect(a.values.toJS()).toEqual([0, 0, 0, 0, 0, 0])
  a.setValues([1, 2, 3, 4, 5, 6])
  expect(a.values.toJS()).toEqual([1, 2, 3, 4, 5, 6])

  Object.keys(REGION).forEach((region) => {
    // test .setValue(REGION.head, value) style setter
    a.setValue(REGION[region], 0)
    expect(a[region]).toEqual(0)

    // test .setHead(value) style setters
    const camelCasedRegion = region.replace(/^./, region.charAt(0).toUpperCase())
    a[`set${camelCasedRegion}`](1)
    expect(a[region]).toEqual(1)
  })

  expect(a.values.toJS()).toEqual([1, 1, 1, 1, 1, 1])
  expect(a.average).toBe(1)
})
