import Weapon from './Weapon'

it('correctly defaults & sets name', () => {
  const a = Weapon.create()

  expect(a.name).toBe('New Weapon')
  a.setName('Foo!')
  expect(a.name).toBe('Foo!')
})

it('defaults to 0 for all values', () => {
  const a = Weapon.create()
  expect(a.values.toJS()).toEqual([0, 0, 0])
})

it('allows setting values', () => {
  const a = Weapon.create()
  expect(a.values.toJS()).toEqual([0, 0, 0])

  a.setValues([1, 2, 3])
  expect(a.values.toJS()).toEqual([1, 2, 3]);

  ['damage', 'accuracy', 'range'].forEach((prop, index) => {
    // test .setValue(index, value) style setter
    a.setValue(index, 0)
    expect(a[prop]).toEqual(0)

    // test .setDamage(value) style setters
    const camelCasedName = prop.replace(/^./, prop.charAt(0).toUpperCase())
    a[`set${camelCasedName}`](1)
    expect(a[prop]).toEqual(1)
  })

  expect(a.values.toJS()).toEqual([1, 1, 1])
})
