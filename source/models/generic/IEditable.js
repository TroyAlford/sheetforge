import { isObservableArray } from 'mobx'
import { types } from 'mobx-state-tree'
import deepEqual from 'deep-equal'
import getPathValue from '@/utilities/getPathValue'
import setPathValue from '@/utilities/setPathValue'

const IEditable = types.model('IEditable', {
  // Any
}).volatile(() => ({
  isIEditable: true,
  savedVersion: {},
})).views(self => ({
  get isDirty() { return !deepEqual(self.toJSON(), self.savedVersion) },
})).actions(self => ({
  /* eslint-disable no-param-reassign */

  afterCreate() { self.savedVersion = self.toJSON() },
  isPathDirty: (path) => {
    const current = getPathValue(self.toJSON(), path)
    const initial = getPathValue(self.savedVersion, path)
    return !deepEqual(current, initial)
  },
  markAsClean() {
    self.savedVersion = self.toJSON()

    Object.keys(self.savedVersion).forEach((key) => {
      const value = self[key]
      if (!value) { return }

      if (value.isIEditable) {
        value.markAsClean()
      } else if (isObservableArray(value)) {
        value.forEach(child => (child && child.isIEditable && child.markAsClean()))
      }
    })
  },
  reset() { Object.assign(self, self.savedVersion) },
  set(key = {}, value = undefined) {
    if (typeof key === 'string' && value !== undefined) {
      // allows: model.set('foo.bar', 'bar')
      if (self[key] !== undefined) {
        self[key] = value
      } else {
        setPathValue(self, key, value)
      }
    } else if (typeof key === 'object' && value === undefined) {
      // allows: model.set({ foo: 'Foo', bar: 'Bar' })
      Object.assign(self, key)
    }
  },

  /* eslint-enable no-param-reassign */
}))

export default IEditable
