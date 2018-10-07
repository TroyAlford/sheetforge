import Descriptor from './Descriptor'

describe('models/Descriptor', () => {
  it('requires name', () => {
    expect(() => Descriptor.create({ value: 'foo' }))
      .toThrow(/name.*is not a string/)
  })

  it('requires value', () => {
    expect(() => Descriptor.create({ name: 'foo' }))
      .toThrow(/value.*not assignable.*string | number/)
  })

  it('accepts strings or numbers as values', () => {
    const descriptor1 = Descriptor.create({
      name: 'string',
      value: 'foo!',
    })
    const descriptor2 = Descriptor.create({
      name: 'number',
      value: 1,
    })

    expect(descriptor1.value).toEqual('foo!')
    expect(descriptor2.value).toEqual(1)
  })
})
