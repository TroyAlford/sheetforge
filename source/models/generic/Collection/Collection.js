import { isObservableArray } from 'mobx'
import { types } from 'mobx-state-tree'
import compareBy from '@/utilities/compareBy'

export default (TYPE, options = {}) => {
  const TypedArrayWrapper = types.model({
    values: types.array(TYPE),
  }).views(self => ({
    get asArray() { return self.values.slice() },
    get first() { return self.length ? self.at(0) : undefined },
    get last() { return self.length ? self.at(self.length - 1) : undefined },
    get length() { return self.values.length },
  })).actions(self => ({
    /* eslint-disable no-param-reassign */

    at: n => self.values[n],
    clear: () => self.values.clear(),
    delete: (object) => { self.values.replace(self.values.filter(item => item !== object)) },
    deleteAt: (index) => { self.values.replace(self.values.filter((_, n) => n !== index)) },
    every: fn => self.values.every(fn),
    filter: fn => self.values.filter(fn),
    find: fn => self.values.find(fn),
    findBy: (key, value) => self.find(item => item[key] === value),
    findById: (id) => {
      if (!TYPE.identifierAttribute) return null
      return self.find(item => item[TYPE.identifierAttribute] === id) || null
    },
    forEach: fn => self.values.forEach(fn),
    includes: (searchElement, fromIndex) => self.values.includes(searchElement, fromIndex),
    indexOf: element => self.values.indexOf(element),
    insert: (object, index) => self.splice(index, 0, object),
    map: fn => self.values.map(fn),
    pop: () => self.values.pop(),
    push: (...values) => self.values.replace([].concat(self.values, values)),
    reduce: (fn, initial) => self.values.reduce(fn, initial),
    replace: values => self.values.replace(values),
    shift: () => self.values.shift(),
    slice: (start, end) => self.values.slice(start, end),
    some: fn => self.values.some(fn),
    sortBy: (property, direction = 'asc') => {
      if (!['asc', 'desc'].includes(direction)) {
        throw new TypeError(`direction must be "asc" or "desc", got: "${direction}"`)
      }
      const values = self.values.slice().sort(compareBy(property))
      self.values.replace(direction === 'desc' ? values.reverse() : values)
      return self
    },
    splice: (index, deleteCount, value) => self.values.splice(index, deleteCount, value),
    toObject: (keyProp, valueProp) => self.values.reduce((object, entry) => {
      const key = entry[keyProp]
      const value = valueProp !== undefined ? entry[valueProp] : entry
      return { ...object, [key]: typeof value === 'function' ? value() : value }
    }, {}),
    unshift: (...values) => self.values.replace([].concat(values, self.values)),

    /* eslint-enable no-param-reassign */
  })).postProcessSnapshot(({ values }) => values)

  return types.custom({
    ...options,
    fromSnapshot: (snapshot = []) => TypedArrayWrapper.create({ values: snapshot }),
    getValidationMessage: (snapshot) => {
      if (!snapshot) return ''
      if (isObservableArray(snapshot) || Array.isArray(snapshot)) {
        if (snapshot.every(f => TYPE.is(f))) return ''
      }

      return 'Collection types must be assigned an array of values or null'
    },
    isTargetType: target => TypedArrayWrapper.is(target),
    name: options.name || 'Collection',
  })
}
