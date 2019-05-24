import freeze from './freeze'
import thaw from './thaw'

describe('utilities/object/thaw', () => {
  it('thaws frozen data deeply without mutating input', () => {
    const data = freeze({ bar: ['bar', 'BAR'], baz: { qux: true }, foo: 'FOO' })
    expect(Object.isFrozen(data)).toBe(true)
    expect(Object.isFrozen(data.bar)).toBe(true)
    expect(Object.isFrozen(data.baz)).toBe(true)

    const thawed = thaw(data)

    expect(Object.isFrozen(data)).toBe(true)
    expect(Object.isFrozen(data.bar)).toBe(true)
    expect(Object.isFrozen(data.baz)).toBe(true)

    expect(Object.isFrozen(thawed)).toBe(false)
    expect(Object.isFrozen(thawed.bar)).toBe(false)
    expect(Object.isFrozen(thawed.baz)).toBe(false)
  })

  it('ignores non-object values', () => {
    const data = freeze({
      bar: 1,
      baz: true,
      foo: 'FOO',
      qux() {
        return this.bar
      },
    })
    const thawed = thaw(data)

    expect(() => {
      thawed.bar = 'bar!'
    }).not.toThrow()
    expect(thawed.bar).toEqual('bar!')
    expect(thawed.qux()).toEqual('bar!')
  })

  it('thaws arrays', () => {
    const data = freeze(['a', 'b', 'c'])
    const thawed = thaw(data)

    expect(thawed).toEqual(['a', 'b', 'c'])
  })

  it('thaws objects in arrays', () => {
    const data = freeze([{ foo: 'bar' }, { baz: 'qux' }])
    const thawed = thaw(data)

    expect(Object.isFrozen(thawed[0])).toBe(false)
    expect(() => {
      thawed[0].NEW = 'foo'
    }).not.toThrow()
    expect(() => {
      thawed[0].foo = 'foo'
    }).not.toThrow()
    expect(() => {
      thawed[0] = 'foo'
    }).not.toThrow()
  })
})
