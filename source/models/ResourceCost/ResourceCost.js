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
    get availableResources() {
      return self.character ? self.character.resources : CollectionOf(Resource).create([])
    },
    get character() { return findParent(self, p => p.isCharacter) },
    get resource() {
      if (!self.character) return null
      return self.character.resources.find(r => r.name === this.resourceName) || null
    },
  }))
).named('Cost')
