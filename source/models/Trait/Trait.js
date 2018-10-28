import { types } from 'mobx-state-tree'
import Effect from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'

export default types.compose(
  IIdentity,
  IEditable,
  types.model('Trait', {
    effects: CollectionOf(Effect),
    name: 'New Trait...',
    value: 0,
  })
).named('Trait')
