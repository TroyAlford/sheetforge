import { isObservableArray } from 'mobx'
import { types } from 'mobx-state-tree'

export default (TYPE, options = {}) => {
  const TypedArrayWrapper = types.model({
    values: types.array(TYPE),
  }).views(self => ({
    get asArray() { return [...self.values] },
    get length() { return self.values.length },
  })).actions(self => ({
    /* eslint-disable no-param-reassign */

    at: n => self.values[n],
    clear: () => { self.values = [] },
    delete: (object) => { self.values = self.values.filter(item => item !== object) },
    deleteAt: (index) => { self.values = self.values.filter((_, n) => n !== index) },
    every: fn => self.asArray.every(fn),
    filter: fn => self.asArray.filter(fn),
    find: fn => self.asArray.find(fn),
    findById: (id) => {
      if (!TYPE.identifierAttribute) return null
      return self.find(item => item[TYPE.identifierAttribute] === id) || null
    },
    forEach: fn => self.asArray.forEach(fn),
    includes: (searchElement, fromIndex) => self.values.includes(searchElement, fromIndex),
    insert: (object, index) => { self.splice(index, 0, object) },
    map: fn => self.asArray.map(fn),
    pop: () => self.values.pop(),
    push: (...values) => self.values.push(...values),
    reduce: (fn, initial) => self.values.reduce(fn, initial),
    shift: () => self.values.shift(),
    slice: (start, end) => self.values.slice(start, end),
    some: fn => self.asArray.some(fn),
    splice: (index, deleteCount, value) => { self.values.splice(index, deleteCount, value) },
    unshift: (...values) => self.values.unshift(...values),

    /* eslint-enable no-param-reassign */
  }))

  return types.custom({
    name: options.name || 'Collection', // eslint-disable-next-line sort-keys
    fromSnapshot: (snapshot = []) => TypedArrayWrapper.create({ values: snapshot }),
    getValidationMessage: (snapshot) => {
      if (!snapshot) return ''
      if (isObservableArray(snapshot) || Array.isArray(snapshot)) {
        if (snapshot.every(f => TYPE.is(f))) return ''
      }

      return 'Collection types must be assigned an array of values or null'
    },
    isTargetType: target => (
      target && target.values && isObservableArray(target.values) && target.values.every(TYPE.is)
    ),
    toSnapshot: value => (value ? value.values.toJSON() : []),
    ...options,
  })
}
