import { isObservableArray } from 'mobx'
import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    displayName: '',
    value: types.union(types.number, types.array(types.number)),
  }).views(self => ({
    get mastery() {
      if (self.type === 'complex') return self.value[1]
      return self.value
    },
    get theory() {
      if (self.type === 'complex') return self.value[0]
      return 0
    },
    get type() {
      if (isObservableArray(self.value)) return 'complex'
      return 'simple'
    },
  }))
).named('Skill')
