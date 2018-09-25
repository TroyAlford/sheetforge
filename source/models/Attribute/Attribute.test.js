import { types } from 'mobx-state-tree'
import Attribute from './Attribute'
import Effect from './Effect'

const DummyCharacter = types.model({
  activeEffects: types.array(Effect),
  attributes: types.map(Attribute),
})

describe('models/Attribute', () => {
  describe('when attached', () => {
    const character = DummyCharacter.create({
      activeEffects: [
        { active: true, displayName: '', modifies: { DEX: 1, STR: 1 } },
        { active: true, displayName: '', modifies: { STR: 4 } },
      ],
      attributes: {
        DEX: { displayName: 'Dexterity', value: 12 },
        STR: { displayName: 'Strength', value: 10 },
      },
    })

    it('computes its displayValue', () => {
      expect(character.attributes.get('STR').displayValue).toEqual(15)
      expect(character.attributes.get('DEX').displayValue).toEqual(13)
    })

    it('can determine its own key', () => {
      expect(character.attributes.get('STR').key).toEqual('STR')
      expect(character.attributes.get('DEX').key).toEqual('DEX')
    })

    it('computes its modifier', () => {
      expect(character.attributes.get('STR').modifier).toEqual(5)
      expect(character.attributes.get('DEX').modifier).toEqual(1)
    })
  })

  describe('when detached', () => {
    const STR = Attribute.create({ displayName: 'Strength', value: 10 })

    it('returns a displayValue equal to its value', () => {
      expect(STR.displayValue).toEqual(STR.value)
    })

    it('returns a key of undefined', () => {
      expect(STR.key).toEqual(undefined)
    })

    it('returns a modifier of 0', () => {
      expect(STR.modifier).toEqual(0)
    })
  })
})
