import { types } from 'mobx-state-tree'
import bound from '@/utilities/bound'
import range from '@/utilities/range'
import ExperienceCost from '@/models/ExperienceCost'

const Attribute = types.model('Attribute', {
  id: types.identifier(types.string),
  name: types.string,
}).actions(self => ({
  /* eslint-disable no-param-reassign */
  setValue(value) {
    const bounded = bound(value, { min: self.min, max: self.max })
    if (bounded === self.value) return
    self.value = bounded
  },
  /* eslint-enable no-param-reassign */
}))

const Primary = types.compose(
  types.model('Attribute', {
    max: 10,
    min: -1,
    type: types.optional(types.literal('primary'), 'primary'),
    value: -1,
  }),
  Attribute,
  ExperienceCost((self) => {
    const values = []
    if (self.value >= 0) values.push(...range(0, self.value))
    return values.reduce((total, value) => (
      total + bound(value * 5, { min: 5 })
    ), 0)
  }, ['setValue'])
)
const Secondary = types.compose(
  types.model('Attribute', {
    type: types.optional(types.literal('secondary'), 'secondary'),
    value: 0,
  }),
  Attribute
)
const Computed = types.model('Attribute', {
  id: types.identifier(types.string),
  name: types.string,
  type: types.optional(types.literal('computed'), 'computed'),
})

const createComputed = fn => types.compose(
  Computed,
  types.model('Attribute', {}).views(self => ({
    get value() { return fn(self) },
  }))
)

const AttributeType = types.union(
  (snapshot) => {
    if (typeof snapshot.value === 'function') return createComputed(snapshot.value)
    if (['size', 'naturalArmor'].indexOf(snapshot.id) >= 0) return Secondary
    return Primary
  },
  Primary, Secondary, Computed
)

export default AttributeType
export {
  Primary,
  Secondary,
  Computed,
  createComputed,
}
