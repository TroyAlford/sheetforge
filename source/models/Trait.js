import { types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'
import ExperienceCost from './ExperienceCost'

const Trait = types.compose(
  types.model('Trait', {
    id: autoHash,
    name: 'New Trait',
    value: 0,
  }).actions(self => ({
    /* eslint-disable no-param-reassign */
    setName(value) { self.name = value },
    setValue(value) { self.value = value },
    /* eslint-enable no-param-reassign */
  })),
  ExperienceCost(self => self.value),
)

export default Trait