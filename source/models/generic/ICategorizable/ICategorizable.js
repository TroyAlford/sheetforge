import { types } from 'mobx-state-tree'

const REGEX = /([^:]*){1,}:/g

export default types.model({
}).volatile(() => ({
  isICategorizable: true,
})).views(self => ({
  get categories() {
    let categories = []
    if (!self.name) return categories

    let match = REGEX.exec(self.name)
    while (match) {
      categories = categories.concat(Array.from(match).slice(1))
      match = REGEX.exec(self.name)
    }

    return categories.map(category => category.trim()).filter(Boolean)
  },
}))
