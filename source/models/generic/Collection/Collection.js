import compareBy from '@/utilities/compareBy'

export default class Collection extends Array {
  constructor(values = []) {
    super(...(Array.isArray(values) ? values : [values]))
  }

  get first() { return this[0] }
  get last() { return this[this.length - 1] }

  append = (...items) => { this.splice(this.length - 1, 0, ...items); return this }
  clear = () => { this.length = 0; return this }
  delete = (item) => {
    while (this.indexOf(item) !== -1) { this.splice(this.indexOf(item), 1) }
    return this
  }
  deleteAt = (index) => { this.splice(index, 1); return this }
  findBy = (key, value) => this.find(item => item && item[key] === value)
  findById = id => this.findBy('id', id)
  groupBy = (predicate, sortBy = null, direction = 'asc') => {
    const keys = new Set()
    const groups = this.reduce((grouped, next, i, all) => {
      const keyValue = typeof predicate === 'function' ? predicate(next, i, all) : next[predicate]

      keys.add(keyValue)
      // eslint-disable-next-line no-param-reassign
      grouped[keyValue] = grouped[keyValue] || new Collection()
      grouped[keyValue].push(next)

      return grouped
    }, {})

    if (sortBy) {
      keys.forEach(groupKey => groups[groupKey].sortBy(sortBy, direction, true))
    }

    return groups
  }
  insert = (value, index = 0) => { this.splice(index, 0, value); return this }
  sortBy = (property, direction = 'asc', inPlace = true) => {
    if (!['asc', 'desc'].includes(direction)) {
      throw new TypeError(`direction must be "asc" or "desc", got: "${direction}"`)
    }
    const values = this.slice().sort(compareBy(property, direction === 'desc'))
    if (inPlace) { this.splice(0, this.length, ...values) }

    return values
  }
  toArray = () => Array.from(this)
}
