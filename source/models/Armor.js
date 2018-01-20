import { types } from 'mobx-state-tree'
import { autoHash } from '../utilities/types'
import { average } from '../utilities/math'

const armorValue = types.refinement(types.number, n => n >= 0)
const armorArray = types.refinement(types.array(armorValue), a => a.length === 6)

export const REGION = {
  head: 0,
  arms: 1,
  torso: 2,
  hands: 3,
  legs: 4,
  feet: 5,
}

const Armor = types.model('Armor', {
  id: autoHash,
  equipped: false,
  name: 'Unnamed Armor',
  values: types.optional(armorArray, [0, 0, 0, 0, 0, 0]),
}).views(self => ({
  get arms() { return self.values[REGION.arms] },
  get feet() { return self.values[REGION.feet] },
  get hands() { return self.values[REGION.hands] },
  get head() { return self.values[REGION.head] },
  get legs() { return self.values[REGION.legs] },
  get torso() { return self.values[REGION.torso] },

  get average() { return average(...self.values) },
})).actions(self => ({
  /* eslint-disable no-param-reassign */
  setName(value) { self.name = value },
  setArms(value) { self.values[REGION.arms] = value },
  setFeet(value) { self.values[REGION.feet] = value },
  setHands(value) { self.values[REGION.hands] = value },
  setHead(value) { self.values[REGION.head] = value },
  setLegs(value) { self.values[REGION.legs] = value },
  setTorso(value) { self.values[REGION.torso] = value },
  setValue(index, value) { self.values[index] = value },
  setValues(values) { self.values = values },
  /* eslint-enable no-param-reassign */
}))

export default Armor
