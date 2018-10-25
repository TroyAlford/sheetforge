import { types } from 'mobx-state-tree'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import Resource from '@/models/Resource'
import findParent from '@/utilities/findParent'

export default types.compose(
  IEditable,
  types.model({
    amount: 0,
    resourceName: '',
  }).views(self => ({
    get available() {
      return self.character ? self.character.resources : CollectionOf(Resource).create([])
    },
    get character() { return findParent(self, p => p.isCharacter) },
  })).actions(self => ({
    afterAttach() {
      if (!self.resourceName && self.available.length) {
        // eslint-disable-next-line no-param-reassign
        self.resourceName = self.available.first.name
      }
    },
    resource() {
      if (!self.character) return null
      return self.character.resources.findBy('name', self.resourceName)
    },
  }))
).named('Cost')
