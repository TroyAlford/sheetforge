import { watch } from 'melanke-watchjs'
import unique from '@/utilities/unique'

export default Class => class extends Class {
  ICategorizable = true
  CACHE = this.CACHE || {}

  constructor(...args) {
    super(...args)
    watch(this, 'name', () => {
      if (this.name !== this.CACHE.$lastCategorizedName) {
        delete this.CACHE.$categories
        delete this.CACHE.$lastCategorizedName
      }
    })
  }

  categorize = () => {
    this.CACHE.$lastCategorizedName = this.name

    const nameParts = this.name.split(':').map(part => part.trim())
    this.CACHE.$uncategorizedName = nameParts.pop() // remove the name

    this.CACHE.$categories = unique(nameParts).filter(Boolean)
  }

  get categories() {
    if (!this.name) return []
    if (!this.CACHE.$categories) this.categorize()

    return this.CACHE.$categories
  }
  set uncategorizedName(name) {
    this.name = [...this.categories, name].join(': ')
  }
  get uncategorizedName() {
    if (!this.CACHE.$uncategorizedName) this.categorize()
    return this.CACHE.$uncategorizedName
  }

  getCategorizedName(...categories) {
    const parts = [...this.categories.filter(c => !categories.includes(c)), this.uncategorizedName]
    return parts.join(': ')
  }
}
