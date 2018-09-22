import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    current: 0,
    displayName: types.string,
    maximum: 10,
  })
).named('Resource')
