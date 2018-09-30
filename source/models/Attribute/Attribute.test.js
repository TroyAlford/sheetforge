import { types } from 'mobx-state-tree'
import Attribute from './Attribute'

const DummyCharacter = types.model({
  activeEffects: types.array(types.model({
    modifier: 0,
    modifies: '',
    sourceName: '',
  })),
  attributes: types.map(Attribute),
  isCharacter: true,
})

describe('models/Attribute', () => {
  describe('when attached', () => {
    const character = DummyCharacter.create({
      activeEffects: [
        { modifier: 1, modifies: 'DEX', sourceName: 'Dexterity!' },
        { modifier: 4, modifies: 'STR', sourceName: 'Strength!' },
        { modifier: 1, modifies: 'STR', sourceName: 'Strength Again!' },
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

    it('returns sourceName', () => {
      expect(character.attributes.get('STR').modifierText).toEqual('Strength!: 4, Strength Again!: 1')
      expect(character.attributes.get('DEX').modifierText).toEqual('Dexterity!: 1')
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

    it('returns "" for modifierText', () => {
      expect(STR.modifierText).toEqual('')
    })
  })
})
