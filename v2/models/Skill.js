import { isObservableArray } from 'mobx'
import { types } from 'mobx-state-tree'

export default types.model('Skill', {
  displayName: '',
  referenceId: types.maybe(types.string), // to lookup description/flavor text/link
  value: types.union(types.number, types.array(types.number)),
}).views(self => ({
  get theory() {
    if (self.type === 'complex') return self.value[0]
    return 0
  },
  get mastery() {
    if (self.type === 'complex') return self.value[1]
    return self.value
  },
  get type() {
    if (isObservableArray(self.value)) return 'complex'
    return 'simple'
  },
}))
