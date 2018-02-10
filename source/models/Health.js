import { getParent, onSnapshot, types } from 'mobx-state-tree'
import bound from '@/utilities/bound'

const TYPES = ['ok', 'light', 'heavy', 'bane']

const HealthValue = types.union(...TYPES.map(type => types.literal(type)))

const Health = types.model('Health', {
  levels: types.optional(types.array(HealthValue), []),
}).volatile(self => ({
  get parent() { return getParent(self) },
})).views(self => ({
  get damage() { return self.levels.filter(level => level !== 'ok').length },
  get max() {
    const resilience = self.parent.attribute('resilience').value || 0
    const size = self.parent.attribute('size').value || 0
    return bound(5 + resilience + size, { min: 1 })
  },
})).actions(self => ({
  /* eslint-disable no-param-reassign */
  heal(numberOfLevels = 1) {
    const damage = self.levels.toJS().filter(level => level !== 'ok')
    damage.length -= bound(numberOfLevels, { max: damage.length })

    self.levels = [...damage, ...Array(self.max - damage.length).fill('ok')]
  },
  healAll() { self.levels = Array(self.max).fill('ok') },
  setLevel(level, severityName) {
    if (!TYPES.includes(severityName)) return

    const index = bound(level - 1, { min: 0, max: self.levels.length - 1 })
    const severity = TYPES.indexOf(severityName)
    const currentSeverity = TYPES.indexOf(self.levels[index])

    if (severity === currentSeverity) return
    const direction = severity > currentSeverity ? '↑' : '↓'

    self.levels = self.levels.map((lvl, i) => {
      if (i === index) return severityName

      const binding = {}

      if (direction === '↑' && i < index) {
        binding.min = severity
      } else if (direction === '↓' && i > index) {
        binding.max = bound(severity - 1, { min: 0 })
      }

      return TYPES[bound(TYPES.indexOf(lvl), binding)]
    })
  },
  // Lifecycle hooks
  afterAttach() {
    onSnapshot(self.parent, () => self.resizeValues())
    self.resizeValues()
    self.levels = self.levels.sort()
  },
  resizeValues() {
    const { max, levels } = self
    if (levels.length < max) self.levels.push(...Array(max - levels.length).fill('ok'))

    // eslint-disable-next-line no-param-reassign
    if (self.levels.length > max) self.levels.length = max
  },
  /* eslint-enable no-param-reassign */
}))

export default Health
