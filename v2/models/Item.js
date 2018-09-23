import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import Descriptor from './Descriptor'
import Effect from './Effect'

export default types.compose(
  IEditable,
  types.model({
    displayName: 'New Item...',
    description: '',
    descriptors: types.array(Descriptor),
    effects: types.array(Effect),
    equipped: false,
  }),
).named('Item')
