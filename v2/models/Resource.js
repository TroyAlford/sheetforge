import { types } from 'mobx-state-tree'
import findMapKey from '@/utilities/findMapKey'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    current: 0,
    maximum: 10,
  })
).named('Resource')
