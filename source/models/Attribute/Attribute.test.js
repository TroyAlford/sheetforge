import { types } from 'mobx-state-tree'
import Attribute from './Attribute'
import Effect from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'

const DummyCharacter = types.model({
  activeEffects: CollectionOf(Effect),
  attributes: CollectionOf(Attribute),
  isCharacter: true,
})

describe('models/Attribute', () => {
  describe('when attached', () => {
    const character = DummyCharacter.create({
      activeEffects: [
        { modifier: 1, target: 'Dexterity' },
        { modifier: 4, target: 'Strength' },
        { modifier: 1, target: 'Strength' },
      ],
      attributes: [
        { displayName: 'Dexterity', value: 12 },
        { displayName: 'Strength', value: 10 },
      ],
    })

    it('computes its displayValue', () => {
      expect(character.attributes.at(0).displayValue).toEqual(13)
      expect(character.attributes.at(1).displayValue).toEqual(15)
    })

    it('computes its effects', () => {
      expect(character.attributes.at(0).effects).toHaveLength(1)
      expect(character.attributes.at(1).effects).toHaveLength(2)
    })

    it('computes its modifier', () => {
      expect(character.attributes.at(0).modifier).toEqual(1)
      expect(character.attributes.at(1).modifier).toEqual(5)
    })

    it('returns modifierText', () => {
      expect(character.attributes.at(0).modifierText).toEqual('Unknown: 1')
      expect(character.attributes.at(1).modifierText).toEqual('Unknown: 4, Unknown: 1')
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
