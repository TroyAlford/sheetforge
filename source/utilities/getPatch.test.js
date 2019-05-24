import getPatch, { DELETED, NOCHANGE } from './getPatch'

describe('utilities/getPatch', () => {
  it('correctly compares simple values', () => {
    expect(getPatch(1, 0)).toEqual(0)
    expect(getPatch('foo', 'bar')).toEqual('bar')
    expect(getPatch(1, true)).toEqual(true)
  })

  it('correctly compares arrays', () => {
    expect(getPatch([0, 1, 2], [])).toEqual([DELETED, DELETED, DELETED])
    expect(getPatch([0, 1, 2], [5, 1, 3, 2])).toEqual([5, NOCHANGE, 3, 2])
  })

  it('correctly handles nested values', () => {
    expect(getPatch([{ a: 1 }, 'b', true], [{ b: 2 }, 'b', false, 'z']))
      .toEqual([{ a: DELETED, b: 2 }, NOCHANGE, false, 'z'])
  })

  it('returns NOCHANGE for equal values', () => {
    expect(getPatch(true, true)).toEqual(NOCHANGE)
    expect(getPatch([1, 2, 3], [1, 2, 3])).toEqual(NOCHANGE)
    expect(getPatch({ a: 1, b: 2 }, { a: 1, b: 2 })).toEqual(NOCHANGE)
    expect(getPatch({ a: { a1: 1 } }, { a: { a1: 1 } })).toEqual(NOCHANGE)
    expect(getPatch({ a: { a1: 1 }, b: { b1: 1 } }, { a: { a2: 2 }, b: { b1: 1 } }))
      .toEqual({ a: { a1: DELETED, a2: 2 } }) // no `b` in output, because it's equivalent
  })
})
