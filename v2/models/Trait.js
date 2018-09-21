import { types } from 'mobx-state-tree'
import Effect from './Effect'
import IEditable from '@/models/generic/IEditable'

export default types.compose(
  IEditable,
  types.model('Trait', {
    effects: types.array(Effect),
    name: '',
    value: 0,
  })
).named('Trait')
