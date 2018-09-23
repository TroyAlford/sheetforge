import { getParent, types } from 'mobx-state-tree'
import ExperienceCost from '@/models/ExperienceCost'
import between from '@/models/types/between'
import bound from '@/utilities/bound'
import range from '@/utilities/range'
import { autoHash } from '@/utilities/types'

const Spell = types.compose(
  types.model('Spell', {
    id: autoHash,
    name: 'New Spell',
    description: '',
    level: between(0, 9),
  }).actions(self => ({
    /* eslint-disable no-param-reassign */
    remove() { return getParent(self, 2).removeSpell(self) },
    setDescription(description) { self.description = description },
    setName(name) { self.name = name },
    setLevel(level) { self.level = level },
    /* eslint-enable no-param-reassign */
  })),
  ExperienceCost((self) => {
    const values = []
    if (self.level >= 1) values.push(...range(1, self.level))
    return values.reduce((total, next) => total + bound(next * 3, { min: 3 }), 0)
  }, ['setLevel'])
)

export default Spell
