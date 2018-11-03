import { types } from 'mobx-state-tree'
import ICategorizable from '@/models/generic/ICategorizable'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'

export default types.compose(
  IIdentity,
  ICategorizable,
  IEditable,
  types.model({
    name: 'New Descriptor...',
    value: '',
  })
).named('Descriptor')
