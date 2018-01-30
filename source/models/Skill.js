import { getParent, types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'
import range from '../utilities/range'
import ExperienceCost from './ExperienceCost'

const between = (min, max, defaultTo = min) => (
  types.refinement(
    types.optional(types.number, defaultTo),
    n => n === undefined || (n >= min && n <= max)
  )
)

const Skill = types.compose(
  types.model('Skill', {
    id: autoHash,
    name: 'New Skill',
    theory: between(0, 10),
    mastery: between(0, 10),
  }).views(self => ({
    get modifier() {
      return getParent(self, 2).modifierFor(self.name)
    },
  })).actions(my => ({
    /* eslint-disable no-param-reassign */
    setName(name) { my.name = name },
    setTheory(theory) { my.theory = theory },
    setMastery(mastery) { my.mastery = mastery },
    /* eslint-enable no-param-reassign */
  })),
  ExperienceCost((self) => {
    const values = [...range(0, self.theory), ...range(1, self.mastery)]
    return values.reduce((total, next) => total + (next ** 2), 1)
  }, ['setMastery', 'setTheory'])
)

export default Skill
