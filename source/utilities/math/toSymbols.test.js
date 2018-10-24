import toSymbols from './toSymbols'

describe('utilities/math/toSymbols', () => {
  it('correctly identifies variables in an expression', () => {
    expect(toSymbols('c = a + b')).toEqual(['c', 'a', 'b'])
  })

  it('returns unique names from an expression', () => {
    expect(toSymbols('a + a + a - b')).toEqual(['a', 'b'])
  })

  it('does not return function names', () => {
    expect(toSymbols('mean([foo, bar, baz])')).toEqual(['foo', 'bar', 'baz'])
  })

  it('does not return numbers', () => {
    expect(toSymbols('4 + 3 / 5')).toEqual([])
  })
})
