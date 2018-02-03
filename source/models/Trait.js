import { types } from 'mobx-state-tree'
import { autoHash } from '@/utilities/types'
import ExperienceCost from '@/models/ExperienceCost'

const Trait = types.compose(
  types.model('Trait', {
    id: autoHash,
    name: 'New Trait',
    value: 0,
  }).actions(self => ({
    /* eslint-disable no-param-reassign */
    setName(name) { self.name = name },
    setValue(value) { self.value = value },
    /* eslint-enable no-param-reassign */
  })),
  ExperienceCost(self => self.value, ['setValue']),
)

export default Trait
