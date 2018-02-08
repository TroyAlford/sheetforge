import { types } from 'mobx-state-tree'
import Item from '@/models/Item'

const armorRating = types.refinement(types.number, n => n >= 0)

const Armor = types.compose(Item, types.model('Armor', {
  name: 'New Armor',
  type: types.optional(types.literal('armor'), 'armor'),
  rating: types.optional(armorRating, 0),
}).actions(self => ({
  /* eslint-disable no-param-reassign */
  setRating(rating) { self.rating = rating },
  /* eslint-enable no-param-reassign */
})))

export default Armor
