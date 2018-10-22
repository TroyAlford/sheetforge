import Attribute from './Attribute'
import Character from '@/models/Character'

describe('models/Attribute', () => {
  describe('when attached', () => {
    const character = Character.create({
      attributes: [
        { name: 'Dexterity', value: 12 },
        { name: 'Strength', value: 10 },
      ],
      traits: [
        {
          effects: [
            { modifier: 1, targetName: 'Dexterity' },
            { modifier: 4, targetName: 'Strength' },
            { modifier: 1, targetName: 'Strength' },
          ],
          name: 'Foo',
        },
      ],
    })

    it('computes its displayValue', () => {
      expect(character.attributes.at(0).displayValue()).toEqual(13)
      expect(character.attributes.at(1).displayValue()).toEqual(15)
    })

    it('computes its effects', () => {
      expect(character.attributes.at(0).effects()).toHaveLength(1)
      expect(character.attributes.at(1).effects()).toHaveLength(2)
    })

    it('computes its modifier', () => {
      expect(character.attributes.at(0).modifier()).toEqual(1)
      expect(character.attributes.at(1).modifier()).toEqual(5)
    })

    it('returns modifierText', () => {
      expect(character.attributes.at(0).modifierText()).toEqual('Foo: 1')
      expect(character.attributes.at(1).modifierText()).toEqual('Foo: 4, Foo: 1')
    })
  })

  describe('when detached', () => {
    const STR = Attribute.create({ name: 'Strength', value: 10 })

    it('returns a displayValue equal to its value', () => {
      expect(STR.displayValue()).toEqual(STR.value)
    })

    it('returns a modifier of 0', () => {
      expect(STR.modifier()).toEqual(0)
    })

    it('returns "" for modifierText', () => {
      expect(STR.modifierText()).toEqual('')
    })
  })
})
