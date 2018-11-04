import { types } from 'mobx-state-tree'
import noop from '@/utilities/noop'
import unique from '@/utilities/unique'

export default (getValue = noop) => types.model({
}).volatile(() => ({
  isICategorizable: true,
})).views((self) => {
  function getCategories() {
    if (!self.name) return []

    const categories = self.name.split(':')
    categories.pop() // remove the name

    return unique(categories.map(category => category.trim()).filter(Boolean)).sort()
  }
  let lastUsedName = self.name
  let categories = getCategories()

  return {
    get categories() {
      if (!self.name || self.name === lastUsedName) return categories

      lastUsedName = self.name
      categories = getCategories()

      return categories
    },
    get categoryValue() { return getValue(self) },
  }
})
