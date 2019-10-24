import Collection from './Collection'
import { randomHash } from '@/utilities/hash'

describe('models/Collection', () => {
  let collection
  let emptyCollection

  beforeEach(() => {
    collection = new Collection([
      { id: '1', value: 'Foo!' },
      { id: '2', value: 'Bar!' },
      { id: '3', value: 'Baz!' },
      { id: '4', value: 'Qux!' },
    ])
    emptyCollection = new Collection([])
  })

  it('converts back to Array', () => {
    expect(collection).toHaveLength(4)
    expect(collection.toArray()).toMatchSnapshot()
  })

  it('supports indexing: collection[n]', () => {
    collection.forEach((item, n) => expect(collection[n]).toBe(item))
  })

  it('supports clear()', () => {
    expect(collection).toHaveLength(4)
    expect(collection.clear())
    expect(collection).toHaveLength(0)
  })

  it('supports delete(item)', () => {
    collection.push(collection[2]) // duplicate one item
    expect(collection).toHaveLength(5)

    collection.delete(collection[2]) // both copies should be removed

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
    expect(collection.filter(({ value }) => value.match(/a/)).toArray())
      .toEqual([{ id: '2', value: 'Bar!' }, { id: '3', value: 'Baz!' }])
  })

  it('supports find(fn)', () => {
    expect(collection.find(({ value }) => value.match(/^F/)))
      .toEqual({ id: '1', value: 'Foo!' })
  })

  it('supports findBy(key, value)', () => {
    expect(collection.findBy('value', 'Bar!')).toBe(collection[1])
  })

  it('supports findById(id)', () => {
    expect(collection.findById('1')).toEqual({ id: '1', value: 'Foo!' })
    expect(collection.findById('5')).toEqual(undefined)
  })

  it('supports first', () => {
    expect(collection.first).toEqual(collection[0])
    expect(emptyCollection.first).toEqual(undefined)
  })

  it('supports forEach(fn)', () => {
    collection.forEach(({ value }) => {
      expect(value).toBeTruthy()
    })
  })

  describe('supports groupBy', () => {
    it('with a string predicate', () => {
      collection = collection.concat(collection)

      const grouped = collection.groupBy('id')
      expect(Object.keys(grouped)).toHaveLength(4)
      Object.keys(grouped).forEach((key) => {
        expect(grouped[key]).toHaveLength(2)
      })
    })

    it('with a function predicate', () => {
      const grouped = collection.groupBy((_, i) => (i % 2 === 0 ? 'evens' : 'odds'))
      expect(grouped.evens instanceof Collection).toBe(true)
      expect(grouped.evens).toHaveLength(2)
      expect(grouped.odds instanceof Collection).toBe(true)
      expect(grouped.odds).toHaveLength(2)
    })

    it('with sorting', () => {
      collection = collection.concat(collection).map(item => ({ ...item, hash: randomHash() }))
      const groupedAsc = collection.groupBy('id', 'hash', 'asc')
      expect(Object.keys(groupedAsc)).toHaveLength(4)
      Object.keys(groupedAsc).forEach((groupKey) => {
        const sorted = groupedAsc[groupKey].sortBy('hash', 'asc', false).toArray()
        expect(groupedAsc[groupKey].toArray()).toEqual(sorted)
      })

      const groupedDesc = collection.groupBy('id', 'hash', 'desc')
      expect(Object.keys(groupedDesc)).toHaveLength(4)
      Object.keys(groupedDesc).forEach((groupKey) => {
        const sorted = groupedDesc[groupKey].sortBy('hash', 'desc', false).toArray()
        expect(groupedDesc[groupKey].toArray()).toEqual(sorted)
      })
    })
  })

  it('supports includes(searchElement, fromIndex)', () => {
    expect(collection.includes(collection[0])).toBe(true)
    expect(collection.includes(collection[0], 1)).toBe(false)
    expect(collection.includes('foo')).toBe(false)
  })

  it('supports insert(object, index), with default index 0', () => {
    collection.insert({ id: '5', value: 'Inserted!' }, 2)
    expect(collection.map(({ value }) => value).toArray())
      .toEqual(['Foo!', 'Bar!', 'Inserted!', 'Baz!', 'Qux!'])

    collection.insert({ id: '0', value: 'First!' })
    expect(collection.map(({ value }) => value).toArray())
      .toEqual(['First!', 'Foo!', 'Bar!', 'Inserted!', 'Baz!', 'Qux!'])
  })

  it('supports last', () => {
    expect(collection.last).toEqual(collection[collection.length - 1])
    expect(emptyCollection.last).toEqual(undefined)
  })

  it('supports map(fn)', () => {
    const result = collection.map((item) => {
      expect(item).toBeTruthy()
      return item
    })
    expect(result).toMatchSnapshot()
  })

  it('supports pop()', () => {
    expect(collection).toHaveLength(4)
    expect(collection.pop()).toEqual({ id: '4', value: 'Qux!' })
    expect(collection).toHaveLength(3)
  })

  it('supports push()', () => {
    expect(collection).toHaveLength(4)
    collection.push({ id: '5', value: 'Yay!' })
    expect(collection).toHaveLength(5)
    expect(collection[4]).toEqual({ id: '5', value: 'Yay!' })
  })

  it('supports reduce(fn, initial)', () => {
    const reduced = collection.reduce((all, item) => (
      [all, item.value].filter(Boolean).join('-')
    ), '')
    expect(reduced).toEqual('Foo!-Bar!-Baz!-Qux!')
  })

  it('supports shift()', () => {
    expect(collection).toHaveLength(4)
    expect(collection.shift()).toEqual({ id: '1', value: 'Foo!' })
    expect(collection).toHaveLength(3)
  })

  it('supports slice(start, end)', () => {
    expect(collection.slice(2).toArray())
      .toEqual([{ id: '3', value: 'Baz!' }, { id: '4', value: 'Qux!' }])
    expect(collection.slice(0, 1).toArray()).toEqual([{ id: '1', value: 'Foo!' }])
  })

  it('supports some(fn)', () => {
    expect(collection.some(({ value }) => value === 'Baz!')).toEqual(true)
    expect(collection.some(({ value }) => value === 'Random!')).toEqual(false)
  })

  it('supports sortBy(property, direction, inPlace)', () => {
    expect(collection.sortBy('value').map(i => i.value).toArray())
      .toEqual(['Bar!', 'Baz!', 'Foo!', 'Qux!'])
    expect(collection.sortBy('value', 'desc').map(i => i.value).toArray())
      .toEqual(['Qux!', 'Foo!', 'Baz!', 'Bar!'])
    expect(() => collection.sortBy('value', 'foo')).toThrow(/direction must be "asc" or "desc"/)

    const beforeSortAsCopy = collection.map(i => i.id)
    const afterSortAsCopy = collection.sortBy('id', 'desc', false).map(i => i.id)
    expect(beforeSortAsCopy).not.toEqual(afterSortAsCopy)

    const beforeSortInPlace = collection.map(i => i.id)
    collection.sortBy('id', 'asc', true)
    expect(collection).not.toEqual(beforeSortInPlace)
  })

  it('supports splice(index, deleteCount, value)', () => {
    collection.splice(1, 2, { id: '5', value: 'Inserted!' })
    expect(collection.map(({ value }) => value).toArray())
      .toEqual(['Foo!', 'Inserted!', 'Qux!'])
  })

  it('supports unshift()', () => {
    expect(collection).toHaveLength(4)
    collection.unshift({ id: '5', value: 'Yay!' })
    expect(collection).toHaveLength(5)
    expect(collection[0]).toEqual({ id: '5', value: 'Yay!' })
  })
})
