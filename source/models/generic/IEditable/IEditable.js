import deepEqual from 'deep-equal'
import clone from '@/utilities/clone'
import getPatch, { NOCHANGE } from '@/utilities/getPatch'
import getPathValue from '@/utilities/getPathValue'
import setPathValue from '@/utilities/setPathValue'

export default class IEditable {
  current = null
  saved = null

  onChangeHandlers = []

  constructor(data = {}) {
    this.current = clone(data)
    this.saved = clone(data)
  }

  onChange = (fn) => {
    this.onChangeHandlers.push(fn)
    return () => { this.onChangeHandlers = this.onChangeHandlers.filter(handler => handler !== fn) }
  }
  reportChange = () => {
    const patch = getPatch(this.current, this.saved)
    if (patch !== NOCHANGE) {
      this.onChangeHandlers.forEach(fn => fn(patch, this.current, this.saved, this))
    }
  }

  get isDirty() { return !deepEqual(this.current, this.saved) }
  isPathDirty = (path) => {
    const current = getPathValue(this.current, path)
    const initial = getPathValue(this.saved, path)
    return !deepEqual(current, initial)
  }

  commitChanges = () => {
    if (!this.isDirty) return
    this.saved = clone(this.current)
    // this.reportChange()
  }
  resetChanges = () => {
    if (!this.isDirty) return
    unwatch(this.current, this.reportChange)
    this.current = clone(this.saved)
    watch(this.current, this.reportChange)
    // this.reportChange()
  }

  get = path => getPathValue(this.current, path)
  set = (key = {}, value = undefined) => {
    if (typeof key === 'string' && value !== undefined) {
      const currentValue = getPathValue(this.current, key)
      if (!deepEqual(currentValue, value)) {
        setPathValue(this.current, key, clone(value))
        // this.reportChange()
      }
    } else if (typeof key === 'object' && value === undefined) {
      Object.assign(this.current, clone(key))
      // this.reportChange()
    }
  }
}
