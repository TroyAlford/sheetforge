import freeze from './freeze'

describe('utilities/object/freeze', () => {
  it('freezes data deeply without mutating input', () => {
    const data = { bar: ['bar', 'BAR'], baz: { qux: true }, foo: 'FOO' }
    expect(Object.isFrozen(data)).toBe(false)
    expect(Object.isFrozen(data.bar)).toBe(false)
    expect(Object.isFrozen(data.baz)).toBe(false)

    const frozen = freeze(data)

    expect(Object.isFrozen(data)).toBe(false)
    expect(Object.isFrozen(data.bar)).toBe(false)
    expect(Object.isFrozen(data.baz)).toBe(false)

    expect(Object.isFrozen(frozen)).toBe(true)
    expect(Object.isFrozen(frozen.bar)).toBe(true)
    expect(Object.isFrozen(frozen.baz)).toBe(true)
  })

  it('ignores non-object values', () => {
    const data = {
      bar: 1,
      baz: true,
      foo: 'FOO',
      qux() {
        return this.bar
      },
    }
    const frozen = freeze(data)

    expect(() => {
      frozen.bar = 'bar!'
    }).toThrow()
    expect(frozen.qux()).toEqual(1)
  })

  it('freezes arrays', () => {
    const data = ['a', 'b', ['c']]
    const frozen = freeze(data)

    expect(Array.isArray(frozen)).toBe(true)
    expect(Array.isArray(frozen[2])).toBe(true)
  })

  it('freezes objects in arrays', () => {
    const data = [{ foo: 'bar' }, { baz: 'qux' }]
    const frozen = freeze(data)

    expect(Object.isFrozen(frozen[0])).toBe(true)
    expect(() => {
      frozen[0] = 'foo'
    }).toThrow()
    expect(() => {
      frozen[0].foo = 'foo'
    }).toThrow()
    expect(() => {
      frozen[0].NEW = 'foo'
    }).toThrow()
  })
})
