import { types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'
import { average } from '../utilities/math'

const armorValue = types.refinement(types.number, n => n >= 0)
const armorArray = types.refinement(types.array(armorValue), a => a.length === 6)

const Armor = types.model('Armor', {
  id: autoHash,
  name: 'Unnamed Armor',
  values: types.optional(armorArray, [0, 0, 0, 0, 0, 0]),
}).views(self => ({
  get head() { return self.values[0] },
  get arms() { return self.values[1] },
  get torso() { return self.values[2] },
  get hands() { return self.values[3] },
  get legs() { return self.values[4] },
  get feet() { return self.values[5] },

  get average() { return average(...self.values) },
})).actions(self => ({
  /* eslint-disable no-param-reassign */
  setName(value) { self.name = value },
  setValues(values) { self.values = values },
  /* eslint-enable no-param-reassign */
}))

export default Armor
