import { types } from 'mobx-state-tree'
import { average } from '@/utilities/math'
import Equippable from '@/models/Equippable'
import Item from '@/models/Item'

const armorValue = types.refinement(types.number, n => n >= 0)
const armorArray = types.refinement(types.array(armorValue), a => a.length === 6)

export const REGION = {
  arms: 1,
  feet: 5,
  hands: 3,
  head: 0,
  legs: 4,
  torso: 2,
}

const Armor = types.compose(Equippable, Item, types.model('Armor', {
  name: 'New Armor',
  type: types.optional(types.literal('armor'), 'armor'),
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
  setArms(value) { self.setValue(REGION.arms, value) },
  setFeet(value) { self.setValue(REGION.feet, value) },
  setHands(value) { self.setValue(REGION.hands, value) },
  setHead(value) { self.setValue(REGION.head, value) },
  setLegs(value) { self.setValue(REGION.legs, value) },
  setTorso(value) { self.setValue(REGION.torso, value) },
  setValue(index, value) { self.values[index] = value },
  setValues(values) { self.values = values },
  /* eslint-enable no-param-reassign */
})))

export default Armor
