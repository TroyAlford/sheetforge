import { types } from 'mobx-state-tree'
import Descriptor from './Descriptor'
import Effect from './Effect'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model({
    description: '',
    descriptors: types.array(Descriptor),
    displayName: 'New Item...',
    effects: types.array(Effect),
    equipped: false,
  }),
).named('Item')
