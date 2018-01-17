import { autorun, computed, intercept, isObservableMap, observable } from 'mobx'
import compareBy from '../utilities/compareBy'
import sum from '../utilities/sum'

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
          // eslint-disable-next-line no-param-reassign
          change.added = added.map(toObservableMap)
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

  @computed get modifiers() {
    return [
      ...this.layers.filter(o => !o.get('inactive')),
      ...this.effects.filter(o => o.get('active')).map(o => o.get('modifiers')),
      ...this.equipment.filter(o => o.get('equipped')).map(o => o.get('modifiers')),
    ]
  }

  averageOf = (...names) => Math.round(this.sumOf(...names) / names.length)
  sumOf = (...names) => names.map(n => this.modifierFor(n)).reduce(sum, 0)

  modifierFor = name => (
    this.modifiers
      .map((m) => {
        if (typeof m.get(name) === 'number') return m.get(name)
        if (typeof m.get(name) === 'function') return m.get(name).apply(this)
        return undefined
      })
      .filter(value => value !== undefined)
      .reduce(sum, 0)
  )
}
