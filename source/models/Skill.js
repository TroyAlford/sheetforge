import { getParent, types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'

const between = (min, max, defaultTo = min) => (
  types.refinement(
    types.optional(types.number, defaultTo),
    n => n === undefined || (n >= min && n <= max)
  )
)

const Skill = types
  .model('Skill', {
    id: autoHash,
    name: 'New Skill',
    theory: between(0, 10),
    mastery: between(1, 10),
  }).views(self => ({
    get modifier() {
      return getParent(self, 2).modifierFor(self.name)
    },
  })).actions(self => ({
    /* eslint-disable no-param-reassign */
    setTheory(value) { self.theory = value },
    setMastery(value) { self.mastery = value },
    /* eslint-enable no-param-reassign */
  }))

export default Skill
