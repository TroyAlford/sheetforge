import Descriptor from './Descriptor'

describe('models/Descriptor', () => {
  it('requires displayName', () => {
    expect(() => Descriptor.create({ value: 'foo' }))
      .toThrow(/displayName.*is not a string/)
  })

  it('requires value', () => {
    expect(() => Descriptor.create({ displayName: 'foo' }))
      .toThrow(/value.*not assignable.*string | number/)
  })

  it('accepts strings or numbers as values', () => {
    const descriptor1 = Descriptor.create({
      displayName: 'string',
      value: 'foo!',
    })
    const descriptor2 = Descriptor.create({
      displayName: 'number',
      value: 1,
    })

    expect(descriptor1.value).toEqual('foo!')
    expect(descriptor2.value).toEqual(1)
  })
})
