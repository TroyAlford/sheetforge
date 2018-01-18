import { autorun, computed, intercept, isObservableMap, observable } from 'mobx'
import compareBy from '../utilities/compareBy'
import hash from '../utilities/hash'
import sum from '../utilities/sum'

const mapReducer = (all, next) => (
  next.entries().forEach(([key, value]) => {
    const current = all.get(key) || 0

    if (typeof value === 'number') all.set(key, current + value)
    if (typeof value === 'function') all.set(key, current + value())

    return all
  })
)
const toObservableMap = o => (
  isObservableMap(o) ? o : observable.map(Object.entries(o))
)
const skillSorter = compareBy('name')

export default class Character {
  @observable name = 'Unnamed Character';
  @observable layers = observable.array([]);
  @observable effects = observable.array([]);
  @observable equipment = observable.array([]);
  @observable descriptors = observable.map({});
  @observable skills = observable.array([])

  constructor({ effects, equipment, layers, name, skills } = {}) {
    ['effects', 'equipment', 'layers', 'skills'].forEach((set) => {
      intercept(this[set], (change) => {
        const { added = [] } = change
        if (added.length) {
          /* eslint-disable no-param-reassign */
          change.added = added.map(toObservableMap)
          change.added.forEach((o) => {
            o.set('id', hash(Math.random().toString()))
            o.entries().forEach(([key, value]) => {
              if (typeof value === 'function') {
                o.set(key, value.bind(this))
              }
            })
          })
          /* eslint-enable no-param-reassign */
        }

        return change
      })
    })

    autorun(() => {
      const sortedSkills = this.skills.sort(skillSorter)
      if (JSON.stringify(this.skills) !== JSON.stringify(sortedSkills)) {
        this.skills.replace(sortedSkills)
      }
    })

    if (typeof name === 'string') {
      this.name = name
    }

    this.effects.replace(effects || [])
    this.equipment.replace(equipment || [])
    this.layers.replace(layers || [])
    this.skills.replace(skills || [])
  }

  @computed get attributes() {
    return this.layers.filter(o => !o.get('inactive')).reduce(mapReducer, new Map())
  }

  @computed get modifiers() {
    return [
      ...this.effects.filter(o => o.get('active')).map(o => o.get('modifiers')),
      ...this.equipment.filter(o => o.get('equipped')).map(o => o.get('modifiers')),
    ].reduce(mapReducer, new Map())
  }

  averageOf = (...names) => Math.round(this.sumOf(...names) / names.length)
  sumOf = (...names) => names.map(n => this.valueOf(n)).reduce(sum, 0)
  valueOf = name => (this.attributes.get(name) || 0) + (this.modifiers.get(name) || 0)
}
