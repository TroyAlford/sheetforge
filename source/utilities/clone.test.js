import clone from './clone'

describe('utilities/clone', () => {
  it('copies simple arrays', () => {
    const simple = [1, 2, 3]
    const simpleClone = clone(simple)
    expect(Array.isArray(simpleClone)).toBe(true)
    expect(simple).not.toBe(simpleClone)
    expect(simpleClone).toEqual(simple)
  })

  it('copies simple objects', () => {
    const simple = { a: 1, b: 2, c: 3 }
    const simpleClone = clone(simple)
    expect(simple).not.toBe(simpleClone)
    expect(simpleClone).toEqual(simple)
  })

  it('copies nested objects and arrays', () => {
    const simple = {
      a: 1,
      b: [2, 3, 4],
      c: { d: [{ e: { f: [{ g: 'h', i: 'j' }, 'k', 5] } }, 6] },
    }
    const simpleClone = clone(simple)
    expect(simple).not.toBe(simpleClone)
    expect(simpleClone).toEqual(simple)

    expect(simple.b).not.toBe(simpleClone.b)
    expect(simple.b).toEqual(simpleClone.b)

    expect(simple.c).not.toBe(simpleClone.c)
    expect(simple.c).toEqual(simpleClone.c)

    expect(simple.c.d).not.toBe(simpleClone.c.d)
    expect(simple.c.d).toEqual(simpleClone.c.d)

    expect(simple.c.d[0]).not.toBe(simpleClone.c.d[0])
    expect(simple.c.d[0]).toEqual(simpleClone.c.d[0])

    expect(simple.c.d[0].e).not.toBe(simpleClone.c.d[0].e)
    expect(simple.c.d[0].e).toEqual(simpleClone.c.d[0].e)

    expect(simple.c.d[0].e.f).not.toBe(simpleClone.c.d[0].e.f)
    expect(simple.c.d[0].e.f).toEqual(simpleClone.c.d[0].e.f)

    expect(simple.c.d[0].e.f[0]).not.toBe(simpleClone.c.d[0].e.f[0])
    expect(simple.c.d[0].e.f[0]).toEqual(simpleClone.c.d[0].e.f[0])
  })
})
