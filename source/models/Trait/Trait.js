import { types } from 'mobx-state-tree'
import Effect from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model('Trait', {
    effects: CollectionOf(Effect),
    name: 'New Trait',
    value: 0,
  })
).named('Trait')
