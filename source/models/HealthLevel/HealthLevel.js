import { isObservableArray } from 'mobx'
import { getParent, types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import bound from '@/utilities/bound'

const DAMAGE_LEVELS = [
  'none',
  'light',
  'heavy',
  'bane',
]

export default types.compose(
  IEditable,
  types.model({
    damage: types.optional(types.union(...DAMAGE_LEVELS.map(dt => types.literal(dt))), 'none'),
    name: '',
    penalty: 0,
  }).volatile(() => ({
    healthBar: null,
  })).views(self => ({
    get index() {
      if (self.healthBar) return self.healthBar.indexOf(self)
      return null
    },
    get severity() { return DAMAGE_LEVELS.indexOf(self.damage) },
  })).actions(self => ({
    adjust(byAmount) {
      const index = bound(self.severity + byAmount, { max: 3, min: 0 })
      self.apply(DAMAGE_LEVELS[index])
    },
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
      if (newSeverity === self.severity) return

      const ownIndex = self.index
      const direction = newSeverity < self.severity ? '↑' : '↓'

      if (!self.healthBar) {
        self.set({ damage })
        return
      }

      self.healthBar.forEach((healthLevel, index) => {
        if (
          (direction === '↑' && index >= ownIndex && healthLevel.severity > newSeverity) ||
          (direction === '↓' && index <= ownIndex && healthLevel.severity < newSeverity)
        ) {
          healthLevel.set({ damage })
        }
      })
    },
    heal() { self.apply('none') },
  }))
).named('HealthLevel')
