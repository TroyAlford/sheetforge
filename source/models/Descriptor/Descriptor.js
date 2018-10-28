import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'

export default types.compose(
  IIdentity,
  IEditable,
  types.model({
    name: 'New Descriptor...',
    value: '',
  })
).named('Descriptor')
