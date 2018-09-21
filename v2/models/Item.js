import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import Effect from './Effect'

export default types.compose(
  IEditable,
  types.model({
    displayName: 'New Item...',
    description: '',
    effects: types.array(Effect),
    equipped: false,
    referenceId: types.maybe(types.string), // to lookup description/flavor text/image
  }),
).named('Item')
