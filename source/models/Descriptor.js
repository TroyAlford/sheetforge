import { types } from 'mobx-state-tree'

const Descriptor = types
  .model('Descriptor', {
    id: types.identifier(types.string),
    name: '',
    value: '',
  }).actions(my => ({
    /* eslint-disable no-param-reassign */
    setName(value) { my.name = value },
    setValue(value) { my.value = value },
    /* eslint-enable no-param-reassign */
  }))

export default Descriptor
