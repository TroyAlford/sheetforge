import { types } from 'mobx-state-tree'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import Resource from '@/models/Resource'
import findParent from '@/utilities/findParent'

export default types.compose(
  IEditable,
  types.model({
    amount: 0,
    resource: types.maybe(types.reference(Resource)),
  }).volatile(() => ({
    character: null,
  })).views(self => ({
    get availableResources() {
      return self.character ? self.character.resources : CollectionOf(Resource).create([])
    },
  })).actions(self => ({
    /* eslint-disable no-param-reassign */

    afterAttach() {
      self.character = findParent(self, p => p.isCharacter)
    },

    /* eslint-enable no-param-reassign */
  }))
).named('Cost')
