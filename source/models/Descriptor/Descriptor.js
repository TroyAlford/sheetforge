import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    name: 'New Descriptor...',
    value: '',
  })
).named('Descriptor')
