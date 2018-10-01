import { types } from 'mobx-state-tree'
import Collection from './Collection'

const Foo = types.model('Foo', {
  value: types.string,
})
const MyCollection = Collection(Foo)

describe('models/Collection', () => {
  let collection

  beforeEach(() => {
    collection = MyCollection.create([
      { value: 'Foo!' },
      { value: 'Bar!' },
      { value: 'Baz!' },
      { value: 'Qux!' },
    ])
  })

  it('can serialize/deserialize', () => {
    expect(collection).toHaveLength(4)
    expect(collection.toJSON()).toMatchSnapshot()
  })

  it('supports at(n)', () => {
    collection.forEach((item, n) => {
      expect(collection.at(n)).toBe(item)
    })
  })

  it('supports clear()', () => {
    expect(collection).toHaveLength(4)
    expect(collection.clear())
    expect(collection).toHaveLength(0)
  })

  it('supports delete(item)', () => {
    expect(collection).toHaveLength(4)
    collection.delete(collection.at(2))
    expect(collection).toHaveLength(3)
    expect(collection).toMatchSnapshot()
  })

  it('supports deleteAt(item)', () => {
    expect(collection).toHaveLength(4)
    collection.deleteAt(2)
    expect(collection).toHaveLength(3)
    expect(collection).toMatchSnapshot()
  })

  it('supports every(fn)', () => {
    expect(collection.every(item => item.value.includes('!'))).toEqual(true)
    expect(collection.every(item => (item.value === 'Foo!'))).toEqual(false)
  })

  it('supports filter(fn)', () => {
    expect(collection.filter(({ value }) => value.match(/a/)))
      .toEqual([{ value: 'Bar!' }, { value: 'Baz!' }])
  })

  it('supports find(fn)', () => {
    expect(collection.find(({ value }) => value.match(/^F/)).toJSON())
      .toEqual({ value: 'Foo!' })
  })

  it('supports forEach(fn)', () => {
    collection.forEach(({ value }) => {
      expect(value).toBeTruthy()
    })
  })

  it('supports includes(searchElement, fromIndex)', () => {
    expect(collection.includes(collection.at(0))).toBe(true)
    expect(collection.includes(collection.at(0), 1)).toBe(false)
    expect(collection.includes('foo')).toBe(false)
  })

  it('supports insert(object, index)', () => {
    collection.insert({ value: 'Inserted!' }, 2)
    expect(collection.map(({ value }) => value)).toEqual(['Foo!', 'Bar!', 'Inserted!', 'Baz!', 'Qux!'])
    collection.insert({ value: 'First!' })
    expect(collection.map(({ value }) => value)).toEqual(['First!', 'Foo!', 'Bar!', 'Inserted!', 'Baz!', 'Qux!'])
  })

  it('supports map(fn)', () => {
    const result = collection.map((item) => {
      expect(item).toBeTruthy()
      return item.toJSON()
    })
    expect(result).toMatchSnapshot()
  })

  it('supports pop()', () => {
    expect(collection).toHaveLength(4)
    expect(collection.pop().toJSON()).toEqual({ value: 'Qux!' })
    expect(collection).toHaveLength(3)
  })

  it('supports push()', () => {
    expect(collection).toHaveLength(4)
    collection.push({ value: 'Yay!' })
    expect(collection).toHaveLength(5)
    expect(collection.at(4).toJSON()).toEqual({ value: 'Yay!' })
  })

  it('supports reduce(fn, initial)', () => {
    const reduced = collection.reduce((all, item) => (
      [all, item.value].filter(Boolean).join('-')
    ), '')
    expect(reduced).toEqual('Foo!-Bar!-Baz!-Qux!')
  })

  it('supports shift()', () => {
    expect(collection).toHaveLength(4)
    expect(collection.shift().toJSON()).toEqual({ value: 'Foo!' })
    expect(collection).toHaveLength(3)
  })

  it('supports slice(start, end)', () => {
    expect(collection.slice(2)).toEqual([{ value: 'Baz!' }, { value: 'Qux!' }])
    expect(collection.slice(0, 1)).toEqual([{ value: 'Foo!' }])
  })

  it('supports some(fn)', () => {
    expect(collection.some(({ value }) => value === 'Baz!')).toEqual(true)
    expect(collection.some(({ value }) => value === 'Random!')).toEqual(false)
  })

  it('supports splice(index, deleteCount, value)', () => {
    collection.splice(1, 2, { value: 'Inserted!' })
    expect(collection.map(({ value }) => value)).toEqual(['Foo!', 'Inserted!', 'Qux!'])
  })

  it('supports unshift()', () => {
    expect(collection).toHaveLength(4)
    collection.unshift({ value: 'Yay!' })
    expect(collection).toHaveLength(5)
    expect(collection.at(0).toJSON()).toEqual({ value: 'Yay!' })
  })
})
