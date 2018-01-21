import { types } from 'mobx-state-tree'

const Equippable = types.model({
  equipped: false,
}).actions(self => ({
  /* eslint-disable no-param-reassign */
  equip() { self.equipped = true },
  setEquipped(value) { self.equipped = Boolean(value) },
  toggleEquipped() { self.equipped = !self.equipped },
  unequip() { self.equipped = false },
  /* eslint-enable no-param-reassign */
}))

export default Equippable
