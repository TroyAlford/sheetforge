import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    name: types.string,
    value: types.union(types.string, types.number),
  })
).named('Descriptor')
