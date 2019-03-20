import calculate from './calculate'

/* eslint-disable sort-keys */
describe('utilities/math/calculate', () => {
  it('computes simple equations', () => {
    expect(calculate('25 / 5 * 3 + 7')).toEqual(22)
  })

  it('computes simple equations with values', () => {
    expect(calculate('a + b / c', { a: 1, b: 25, c: 5 })).toEqual(6)
  })

  it('uses options.defaultSymbolValue for unrecognized symbols', () => {
    expect(calculate('foo + bar / baz', { bar: 20, baz: 5 })).toEqual(4) // foo === 0 by default
    expect(calculate('foo + bar / baz', { bar: 20, baz: 5 }, { defaultSymbolValue: 1 })).toEqual(5)
  })

  it('performs math functions', () => {
    expect(calculate('mean(5, 8, 2)')).toEqual(5)
    expect(calculate('mean(foo, bar, baz)', { bar: 8, baz: 2, foo: 5 })).toEqual(5)
  })

  it('performs invalid math functions', () => {
    expect(calculate('mean(foo, bar, baz)', { foo: 2, bar: NaN, baz: 7 })).toEqual(3)
    expect(calculate('mean(foo, bar, baz)', { foo: 3, bar: 'foo', baz: 9 })).toEqual(4)
  })
})
