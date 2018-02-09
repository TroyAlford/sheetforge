import { getParent, types } from 'mobx-state-tree'
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
  }).actions(self => ({
    /* eslint-disable no-param-reassign */
    remove() { return getParent(self, 2).removeItem(self) },
    setDescription(description) { self.description = description },
    setName(name) { self.name = name },
    setQuantity(quantity) { self.quantity = quantity },
    setWorth(worth) { self.worth = worth },
    /* eslint-enable no-param-reassign */
  })),
  Equippable
)

export default Item
