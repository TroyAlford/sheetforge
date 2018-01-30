import { types } from 'mobx-state-tree'
import Equippable from './Equippable'
import Item from './Item'

const weaponArray = types.refinement(types.array(types.number), a => a.length === 3)

const PROPS = {
  accuracy: 1,
  damage: 0,
  range: 2,
}

const Weapon = types.compose(Equippable, Item, types.model('Weapon', {
  name: 'New Weapon',
  values: types.optional(weaponArray, [0, 0, 0]),
}).views(self => ({
  get accuracy() { return self.values[PROPS.accuracy] },
  get damage() { return self.values[PROPS.damage] },
  get range() { return self.values[PROPS.range] },
})).actions(self => ({
  /* eslint-disable no-param-reassign */
  setAccuracy(value) { self.setValue(PROPS.accuracy, value) },
  setDamage(value) { self.setValue(PROPS.damage, value) },
  setRange(value) { self.setValue(PROPS.range, value) },
  setValue(index, value) { self.values[index] = value },
  setValues(values) { self.values = values },
  /* eslint-enable no-param-reassign */
})))

export default Weapon
