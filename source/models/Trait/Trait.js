import { types } from 'mobx-state-tree'
import Effect from '@/models/Effect'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model('Trait', {
    displayName: types.string,
    effects: types.array(Effect),
    value: 0,
  })
).named('Trait')
