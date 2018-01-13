import bound from './bound'

describe('bound()', () => {
  it('correctly applies ranges to numeric values', () => {
    expect(bound(5, { max: 0 })).toBe(0)
    expect(bound(-5, { min: 0 })).toBe(0)
    expect(bound(0, { min: -1, max: 1 })).toBe(0)
  })

  it('correctly applies ranges to string values', () => {
    expect(bound('e', { max: 'c' })).toBe('c')
    expect(bound('a', { min: 'e' })).toBe('e')
    expect(bound('c', { min: 'a', max: 'e' })).toBe('c')
  })
})
