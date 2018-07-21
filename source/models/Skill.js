import { getParent, types } from 'mobx-state-tree'
import { autoHash } from '@/utilities/types'
import bound from '@/utilities/bound'
import range from '@/utilities/range'
import ExperienceCost from '@/models/ExperienceCost'

const between = (min, max, defaultTo = min) => (
  types.optional(
    types.refinement(
      types.number,
      n => n === undefined || (n >= min && n <= max)
    ),
    defaultTo
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
  })).actions(self => ({
    /* eslint-disable no-param-reassign */
    remove() { return getParent(self, 2).removeSkill(self) },
    setName(name) { self.name = name },
    setTheory(theory) { self.theory = theory },
    setMastery(mastery) { self.mastery = mastery },
    /* eslint-enable no-param-reassign */
  })),
  ExperienceCost((self) => {
    const values = []
    if (self.theory >= 1) values.push(...range(1, self.theory))
    if (self.mastery >= 1) values.push(...range(1, self.mastery))
    return values.reduce((total, next) => total + bound(next * 3, { min: 3 }), 0)
  }, ['setMastery', 'setTheory'])
)

export default Skill
