import { types } from 'mobx-state-tree'
import { autoHash } from '@/utilities/types'
import Equippable from '@/models/Equippable'

const Item = types.compose(
  types.model('Item', {
    id: autoHash,
    description: '',
    name: 'New Item',
    quantity: types.optional(types.refinement(types.number, n => n >= 0), 1),
    type: types.optional(types.literal('item'), 'item'),
    worth: types.optional(types.refinement(types.number, n => n >= 0), 0),
  }).actions(my => ({
    /* eslint-disable no-param-reassign */
    setDescription(description) { my.description = description },
    setName(name) { my.name = name },
    setQuantity(quantity) { my.quantity = quantity },
    setWorth(worth) { my.worth = worth },
    /* eslint-enable no-param-reassign */
  })),
  Equippable
)

export default Item
