import { types } from 'mobx-state-tree'
import { randomHash } from '@/utilities/hash'

export default types.model({
  // Nothing
}).volatile(() => ({
  hash: '',
})).actions(self => ({
  afterCreate() { self.hash = randomHash() }, // eslint-disable-line no-param-reassign
}))
