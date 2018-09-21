import findMapKey from './findMapKey'

const foo = { foo: 'Foo!', bar: 'Bar!' }
const bar = { foo: 'Foo!', bar: 'Bar!' }

const map = new Map(Object.entries({
  foo,
  bar,
  one: 1,
  I: 1,
  string: 'string',
  string2: 'string',
}))

describe('utilities/findMapKey', () => {
  it('finds correct keys', () => {
    expect(findMapKey(map, foo)).toEqual('foo')
    expect(findMapKey(map, bar)).toEqual('bar')
    expect(findMapKey(map, 1)).toEqual('one')
    expect(findMapKey(map, 'string')).toEqual('string')
    expect(findMapKey(map, {})).toEqual(undefined)
  })

  it('returns undefined for incompatible maps', () => {
    expect(findMapKey('string', foo)).toEqual(undefined)
  })
})
