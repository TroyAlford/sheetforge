import { isObservableArray } from 'mobx'
import { types } from 'mobx-state-tree'

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
    insert: (object, index) => self.splice(index, 0, object),
    map: fn => self.values.map(fn),
    pop: () => self.values.pop(),
    push: (...values) => self.values.replace([].concat(self.values, values)),
    reduce: (fn, initial) => self.values.reduce(fn, initial),
    shift: () => self.values.shift(),
    slice: (start, end) => self.values.slice(start, end),
    some: fn => self.values.some(fn),
    splice: (index, deleteCount, value) => self.values.splice(index, deleteCount, value),
    unshift: (...values) => self.values.replace([].concat(values, self.values)),

    // eslint-disable-next-line sort-keys
    afterCreate: () => {
      Object.defineProperty(self.$treenode, 'snapshot', {
        get: () => self.$treenode._getActualSnapshot().values, // eslint-disable-line
      })
    },

    /* eslint-enable no-param-reassign */
  }))

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
