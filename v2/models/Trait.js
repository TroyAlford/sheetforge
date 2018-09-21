import { types } from 'mobx-state-tree'
import Effect from './Effect'

export default types.model('Trait', {
  effects: types.array(Effect),
  name: '',
  value: 0,
})
