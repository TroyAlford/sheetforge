import { types } from 'mobx-state-tree'
import bound from '../utilities/bound'
import range from '../utilities/range'
import ExperienceCost from './ExperienceCost'

const Primary = types.compose(
  types.model('Attribute', {
    id: types.identifier(types.string),
    computed: types.literal(false),
    max: 10,
    min: -10,
    name: types.string,
    value: -1,
  }).actions(self => ({
    /* eslint-disable no-param-reassign */
    setValue(value) {
      const bounded = bound(value, { min: self.min, max: self.max })
      if (bounded === self.value) return
      self.value = bounded
    },
    /* eslint-enable no-param-reassign */
  })),
  ExperienceCost((self) => {
    const values = range(-1, self.value)
    return values.reduce((total, value) => (
      total + ((Math.abs(value + 1) ** 2) * (value < 0 ? -1 : 1))
    ), 0)
  }, ['setValue'])
)

const Computed = types.model('Attribute', {
  id: types.identifier(types.string),
  computed: types.literal(true),
  name: types.string,
})

const createComputed = fn => types.compose(
  Computed,
  types.model('Attribute', {}).views(self => ({
    get value() { return fn(self) },
  }))
)

const Attribute = types.union(Primary, Computed)
Attribute.create = ({ computed, value, ...props }, ...args) => {
  // Hijack the create method to automatically infer & create Computeds
  if (computed || typeof value === 'function') {
    return createComputed(value).create({ ...props, computed: true }, ...args)
  }

  return Primary.create({ ...props, computed: false, value }, ...args)
}

export default Attribute
export {
  Primary,
  Computed,
  createComputed,
}
