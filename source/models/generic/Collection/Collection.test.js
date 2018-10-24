import { types } from 'mobx-state-tree'
import Collection from './Collection'

const Foo = types.model('Foo', {
  id: types.identifier,
  value: types.string,
})
const MyCollection = Collection(Foo)

describe('models/Collection', () => {
  let collection
  let emptyCollection

  beforeEach(() => {
    collection = MyCollection.create([
      { id: '1', value: 'Foo!' },
      { id: '2', value: 'Bar!' },
      { id: '3', value: 'Baz!' },
      { id: '4', value: 'Qux!' },
    ])
    emptyCollection = MyCollection.create([])
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
      .toEqual([{ id: '2', value: 'Bar!' }, { id: '3', value: 'Baz!' }])
  })

  it('supports find(fn)', () => {
    expect(collection.find(({ value }) => value.match(/^F/)).toJSON())
      .toEqual({ id: '1', value: 'Foo!' })
  })

  it('supports findBy(key, value)', () => {
    expect(collection.findBy('value', 'Bar!')).toBe(collection.at(1))
  })

  it('supports findById(id)', () => {
    expect(collection.findById('1')).toEqual({ id: '1', value: 'Foo!' })
    expect(collection.findById('5')).toEqual(null)
  })

  it('supports first', () => {
    expect(collection.first).toEqual(collection.values[0])
    expect(emptyCollection.first).toEqual(undefined)
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
    collection.insert({ id: '5', value: 'Inserted!' }, 2)
    expect(collection.map(({ value }) => value)).toEqual(['Foo!', 'Bar!', 'Inserted!', 'Baz!', 'Qux!'])
    collection.insert({ id: '0', value: 'First!' })
    expect(collection.map(({ value }) => value)).toEqual(['First!', 'Foo!', 'Bar!', 'Inserted!', 'Baz!', 'Qux!'])
  })

  it('supports last', () => {
    expect(collection.last).toEqual(collection.values[collection.values.length - 1])
    expect(emptyCollection.last).toEqual(undefined)
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
    expect(collection.pop().toJSON()).toEqual({ id: '4', value: 'Qux!' })
    expect(collection).toHaveLength(3)
  })

  it('supports push()', () => {
    expect(collection).toHaveLength(4)
    collection.push({ id: '5', value: 'Yay!' })
    expect(collection).toHaveLength(5)
    expect(collection.at(4).toJSON()).toEqual({ id: '5', value: 'Yay!' })
  })

  it('supports reduce(fn, initial)', () => {
    const reduced = collection.reduce((all, item) => (
      [all, item.value].filter(Boolean).join('-')
    ), '')
    expect(reduced).toEqual('Foo!-Bar!-Baz!-Qux!')
  })

  it('supports shift()', () => {
    expect(collection).toHaveLength(4)
    expect(collection.shift().toJSON()).toEqual({ id: '1', value: 'Foo!' })
    expect(collection).toHaveLength(3)
  })

  it('supports slice(start, end)', () => {
    expect(collection.slice(2)).toEqual([{ id: '3', value: 'Baz!' }, { id: '4', value: 'Qux!' }])
    expect(collection.slice(0, 1)).toEqual([{ id: '1', value: 'Foo!' }])
  })

  it('supports some(fn)', () => {
    expect(collection.some(({ value }) => value === 'Baz!')).toEqual(true)
    expect(collection.some(({ value }) => value === 'Random!')).toEqual(false)
  })

  it('supports sortBy(property)', () => {
    expect(collection.sortBy('value').map(i => i.value)).toEqual(['Bar!', 'Baz!', 'Foo!', 'Qux!'])
  })

  it('supports splice(index, deleteCount, value)', () => {
    collection.splice(1, 2, { id: '5', value: 'Inserted!' })
    expect(collection.map(({ value }) => value)).toEqual(['Foo!', 'Inserted!', 'Qux!'])
  })

  it('supports toObject(keyProp, valueProp)', () => {
    expect(collection.toObject('id', 'value')).toEqual({ 1: 'Foo!', 2: 'Bar!', 3: 'Baz!', 4: 'Qux!' })
    expect(collection.toObject('value', 'id')).toEqual({ 'Bar!': '2', 'Baz!': '3', 'Foo!': '1', 'Qux!': '4' })
    expect(collection.toObject('id')).toEqual({
      1: { id: '1', value: 'Foo!' },
      2: { id: '2', value: 'Bar!' },
      3: { id: '3', value: 'Baz!' },
      4: { id: '4', value: 'Qux!' },
    })
    expect(collection.toObject('missing')).toEqual({ undefined: { id: '4', value: 'Qux!' } })
  })

  it('supports unshift()', () => {
    expect(collection).toHaveLength(4)
    collection.unshift({ id: '5', value: 'Yay!' })
    expect(collection).toHaveLength(5)
    expect(collection.at(0).toJSON()).toEqual({ id: '5', value: 'Yay!' })
  })
})
