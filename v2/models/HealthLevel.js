import { isObservableArray } from 'mobx'
import { getParent, types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'

const DAMAGE_TYPES = [
  'none',
  'bashing',
  'lethal',
  'aggravated',
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
    damage(damageType) {
      if (self.healthBar) {
        const damage = DAMAGE_TYPES.indexOf(damageType)

        self.set({ damageType })
        self.healthBar.forEach((healthLevel, index) => {
          const current = DAMAGE_TYPES.indexOf(healthLevel.damageType)
          if (index < self.index && current > damage) {
            // Healing: left-of-target and current is WORSE than setting
            healthLevel.set({ damageType })
          } else if (index > self.index && current < damage) {
            // Harming: right-of-target and current is BETTER than setting
            healthLevel.set({ damageType })
          }
        })
      }
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
