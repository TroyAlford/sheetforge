import { types } from 'mobx-state-tree'
import Descriptor from '@/models/Descriptor'
import Effect from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    description: '',
    descriptors: CollectionOf(Descriptor),
    displayName: 'New Item...',
    effects: CollectionOf(Effect),
    equipped: false,
  }),
).named('Item')
