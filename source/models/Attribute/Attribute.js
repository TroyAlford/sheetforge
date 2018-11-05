import { types } from 'mobx-state-tree'
import ICategorizable from '@/models/generic/ICategorizable'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'
import findParent from '@/utilities/findParent'
import math from '@/utilities/math'
import calculate from '@/utilities/math/calculate'
import toSymbols from '@/utilities/math/toSymbols'

export default types.compose(
  IIdentity,
  ICategorizable(self => self.modifiedValue()),
  IEditable,
  types.model({
    name: 'New Attribute...',
    raw: types.optional(types.union(types.number, types.string), 0),
  }).views(self => ({
    get character() { return findParent(self, p => p.isCharacter) },
    get id() {
      return self.name.split(':').pop()
        .trim().toLowerCase()
        .replace(/[^a-z0-9]/ig, '')
    },
    get isComputed() { return typeof self.raw === 'string' },
  })).actions((self) => {
    let computing = false

    return ({
      effects() {
        if (!self.character) return []
        return self.character.activeEffects().filter(effect => effect.targetId === self.id)
      },
      modifiedValue() { return (self.value() || 0) + self.modifier() },
      modifier() { return math.sum(self.effects().map(effect => effect.modifier)) },
      modifierText() {
        return self.effects().map(effect => `${effect.sourceName()}: ${effect.modifier}`).join(', ')
      },
      value() {
        if (!self.isComputed) return self.raw
        if (self.character === null) return 0
        if (computing) return 0

        computing = true
        let computed = 0

        try {
          const values = toSymbols(self.raw).reduce((all, symbol) => {
            const attribute = self.character.attributes.findBy('id', symbol)
            return Object.assign(all, { [symbol]: attribute ? attribute.modifiedValue() : 0 })
          }, {})

          computed = calculate(self.raw, values)
        } catch (error) {
          // eslint-disable-next-line no-undef
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.error(`Error computing: ${self.raw}`)
          }
          computed = 0
        }

        computing = false
        return computed
      },
    })
  }).preProcessSnapshot(({ value, ...snapshot }) => ({ ...snapshot, raw: value }))
    .postProcessSnapshot(({ raw, ...snapshot }) => ({ ...snapshot, value: raw }))
).named('Attribute')
