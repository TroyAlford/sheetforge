import { types } from 'mobx-state-tree'
import IEditable from '@/models/generic/IEditable'
import findParent from '@/utilities/findParent'
import { sum } from '@/utilities/math'
import calculate from '@/utilities/math/calculate'
import toSymbols from '@/utilities/math/toSymbols'

export default types.compose(
  IEditable,
  types.model({
    name: types.string,
    raw: types.optional(types.union(types.number, types.string), 0),
  }).views(self => ({
    get character() { return findParent(self, p => p.isCharacter) },
    get id() { return self.name.toLowerCase().replace(/[^a-z0-9]/ig, '') },
    get isComputed() { return typeof self.raw === 'string' },
  })).actions(self => ({
    effects() {
      if (!self.character) return []
      return self.character.activeEffects().filter(effect => effect.target === self)
    },
    modifiedValue() { return self.value() + self.modifier() },
    modifier() { return sum(self.effects().map(effect => effect.modifier)) },
    modifierText() {
      return self.effects().map(effect => `${effect.sourceName}: ${effect.modifier}`).join(', ')
    },
    value() {
      if (!self.isComputed) return self.raw
      if (self.character === null) return 0

      try {
        const values = toSymbols(self.raw).reduce((all, symbol) => {
          const attribute = self.character.attributes.findBy('id', symbol)
          return Object.assign(all, { [symbol]: attribute ? attribute.modifiedValue() : 0 })
        }, {})

        return calculate(self.raw, values)
      } catch (error) {
        return 0
      }
    },
  }))
    .preProcessSnapshot(({ value, ...snapshot }) => ({ ...snapshot, raw: value }))
    .postProcessSnapshot(({ raw, ...snapshot }) => ({ ...snapshot, value: raw }))
).named('Attribute')
