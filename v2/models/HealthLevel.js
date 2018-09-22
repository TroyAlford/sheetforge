import { isObservableArray } from 'mobx'
import { getParent, types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

const DAMAGE_TYPES = [
  'ok',
  'light',
  'heavy',
  'bane',
]

export default types.compose(
  IEditable,
  types.model({
    damageType: types.union(...DAMAGE_TYPES.map(dt => types.literal(dt))),
    displayName: types.string,
    woundPenalty: 0,
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
    damage(severity) {
      if (!DAMAGE_TYPES.includes(severity)) return

      const newSeverity = DAMAGE_TYPES.indexOf(severity)
      const ownSeverity = DAMAGE_TYPES.indexOf(self.damageType)
      if (newSeverity === ownSeverity) return

      const ownIndex = self.index
      const direction = newSeverity < ownSeverity ? '↑' : '↓'

      if (!self.healthBar) {
        self.set({ damageType: severity })
        return
      }

      self.healthBar.forEach((healthLevel, index) => {
        const current = DAMAGE_TYPES.indexOf(healthLevel.damageType)

        if (
          (direction === '↑' && index <= ownIndex && current > newSeverity) ||
          (direction === '↓' && index >= ownIndex && current < newSeverity)
        ) {
          healthLevel.set({ damageType: severity })
        }
      })
    },
    // heal() {
    //   if (self.healthBar) {
    //     self.healthBar.forEach((healthLevel, index) => {
    //       if (index <= self.index) healthLevel.set('damageType', 'none')
    //     })
    //   } else {
    //     self.set('damageType', 'none')
    //   }
    // },
  }))
).named('HealthLevel')
