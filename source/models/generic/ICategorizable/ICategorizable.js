import { types } from 'mobx-state-tree'

const REGEX = /([^:]*){1,}:/g

export default types.model({
}).volatile(() => ({
  isICategorizable: true,
})).views((self) => {
  function getCategories() {
    let categories = []
    if (!self.name) return categories

    let match = REGEX.exec(self.name)
    while (match) {
      categories = categories.concat(Array.from(match).slice(1))
      match = REGEX.exec(self.name)
    }

    return categories.map(category => category.trim()).filter(Boolean)
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
  }
})
