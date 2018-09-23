import { isObservableArray } from 'mobx'
import { getParent, types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

const DAMAGE_LEVELS = [
  'none',
  'light',
  'heavy',
  'bane',
]

export default types.compose(
  IEditable,
  types.model({
    displayName: types.string,
    damage: types.union(...DAMAGE_LEVELS.map(dt => types.literal(dt))),
    penalty: 0,
  }).volatile(() => ({
    healthBar: null,
  })).views(self => ({
    get index() {
      if (self.healthBar) return self.healthBar.indexOf(self)
      return null
    },
  })).actions(self => ({
    afterAttach() {
      try {
        const healthBar = getParent(self)
        if (isObservableArray(healthBar)) {
          self.healthBar = healthBar // eslint-disable-line no-param-reassign
        }
      } catch (e) {}
    },
    apply(damage) {
      if (!DAMAGE_LEVELS.includes(damage)) return

      const newSeverity = DAMAGE_LEVELS.indexOf(damage)
      const ownSeverity = DAMAGE_LEVELS.indexOf(self.damage)
      if (newSeverity === ownSeverity) return

      const ownIndex = self.index
      const direction = newSeverity < ownSeverity ? '↑' : '↓'

      if (!self.healthBar) {
        self.set({ damage })
        return
      }

      self.healthBar.forEach((healthLevel, index) => {
        const current = DAMAGE_LEVELS.indexOf(healthLevel.damage)

        if (
          (direction === '↑' && index <= ownIndex && current > newSeverity) ||
          (direction === '↓' && index >= ownIndex && current < newSeverity)
        ) {
          healthLevel.set({ damage })
        }
      })
    },
    heal() { self.apply('none') },
  }))
).named('HealthLevel')
