import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    mastery: 1,
    name: '',
    theory: 0,
  }).views(self => ({
    get isComplex() { return self.theory !== 0 },
    get isSimple() { return self.theory === 0 },
  }))
).named('Skill')
