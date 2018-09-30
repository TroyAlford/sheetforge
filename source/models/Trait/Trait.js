import { types } from 'mobx-state-tree'
import Effect from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model('Trait', {
    displayName: types.string,
    effects: CollectionOf(Effect),
    value: 0,
  })
).named('Trait')
