import flow from '../utility/flow'

const KEY = Symbol('key')
const VALUE = Symbol('value')

const onlyFunctions = fn => typeof fn === 'function'

export default class Property {
  constructor(key, { defaultValue = 0, updaters = [], subscribers = [] } = {}) {
    if (!key) throw 'Property instances require a valid key'
    this.calculate = this.calculate.bind(this)

    this[KEY] = key
    this.defaultValue = defaultValue
    this.updaters = updaters
    this.subscribers = subscribers
  }

  get value() {
    if (this[VALUE] === undefined) {
      this[VALUE] = this.calculate()
    }

    return this[VALUE]
  }

  calculate() {
    const key = this[KEY]
    const updaters = this.updaters.filter(onlyFunctions)
    const subscribers = this.subscribers.filter(onlyFunctions)

    const calculated = flow(updaters, this.defaultValue)
    if (calculated !== this[VALUE]) subscribers.forEach(fn => fn(key, calculated))
    return calculated
  }
}
