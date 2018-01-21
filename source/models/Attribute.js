import { types } from 'mobx-state-tree'
import range from '../utilities/range'
import ExperienceCost from './ExperienceCost'

const Primary = types.compose(
  types.model('Attribute', {
    id: types.identifier(types.string),
    computed: types.literal(false),
    name: types.string,
    initialValue: -1,
    value: -1,
  }).actions(self => ({
    /* eslint-disable no-param-reassign */
    setValue(value) { self.value = value },
    /* eslint-enable no-param-reassign */
  })),
  ExperienceCost((self) => {
    const values = range(self.initialValue, self.value)
    return values.reduce((total, value) => (
      total + ((Math.abs(value + 1) ** 2) * (value < 0 ? -1 : 1))
    ), 0)
  })
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
