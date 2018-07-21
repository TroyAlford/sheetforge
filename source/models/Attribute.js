import { types } from 'mobx-state-tree'
import bound from '@/utilities/bound'
import range from '@/utilities/range'
import ExperienceCost from '@/models/ExperienceCost'

const Attribute = types.model('Attribute', {
  id: types.identifier,
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
    type: types.literal('primary'),
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
    type: types.literal('secondary'),
    value: 0,
  }),
  Attribute
)
const Computed = types.model('Attribute', {
  id: types.identifier,
  name: types.string,
  type: types.literal('computed'),
})

const createComputed = fn => types.compose(
  Computed,
  types.model('Attribute', {}).views(self => ({
    get value() { return fn(self) },
  }))
)

const AttributeType = types.union(
  Primary, Secondary, Computed,
  types.custom({
    isTargetType: value => Primary.is(value) || Secondary.is(value) || Computed.is(value),
    fromSnapshot: snapshot => {
      let model = Primary, type = 'primary'
      if (typeof snapshot.value === 'function') {
        model = createComputed(snapshot.value)
        type = 'computed'
      } else if (['size', 'naturalArmor'].includes(snapshot.id)) {
        model = Secondary
        type = 'secondary'
      }

      return model.create({ ...snapshot, type })
    },
    toSnapshot: value => value.toJSON(),
    getValidationMessage: value => (typeof value === 'object' ? '' : '${value} is not an object.'),
  }),
)

export default AttributeType
export {
  Primary,
  Secondary,
  Computed,
  createComputed,
}
