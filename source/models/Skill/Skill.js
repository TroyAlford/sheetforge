import { types } from 'mobx-state-tree'
import ICategorizable from '@/models/generic/ICategorizable'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'

export default types.compose(
  IIdentity,
  ICategorizable(self => self.mastery),
  IEditable,
  types.model({
    mastery: 1,
    name: 'New Skill...',
    theory: 0,
  }).views(self => ({
    get isComplex() { return self.theory !== 0 },
    get isSimple() { return self.theory === 0 },
  }))
).named('Skill')
