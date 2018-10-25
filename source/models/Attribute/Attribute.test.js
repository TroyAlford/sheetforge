import Attribute from './Attribute'
import Character from '@/models/Character'

describe('models/Attribute', () => {
  describe('when attached', () => {
    const character = Character.create({
      attributes: [
        { name: 'Agility', value: 2 },
        { name: 'Fitness', value: 4 },
        { name: 'Strength', value: 5 },
        { name: 'Body', value: 'mean([agility, fitness, strength])' },
        { name: 'Test', value: 'mean([body, fitness, strength])' },
      ],
      traits: [
        {
          effects: [
            { modifier: 1, targetName: 'Agility' },
            { modifier: 4, targetName: 'Strength' },
            { modifier: 1, targetName: 'Strength' },
          ],
          name: 'Foo',
        },
      ],
    })

    it('computes its modifiedValue', () => {
      expect(character.attributes.at(0).modifiedValue()).toEqual(3)
      expect(character.attributes.at(1).modifiedValue()).toEqual(4)
      expect(character.attributes.at(2).modifiedValue()).toEqual(10)
      expect(character.attributes.at(3).modifiedValue()).toEqual(17 / 3)
    })

    it('computes its effects', () => {
      expect(character.attributes.at(0).effects()).toHaveLength(1)
      expect(character.attributes.at(1).effects()).toHaveLength(0)
      expect(character.attributes.at(2).effects()).toHaveLength(2)
      expect(character.attributes.at(3).effects()).toHaveLength(0)
    })

    it('computes its modifier', () => {
      expect(character.attributes.at(0).modifier()).toEqual(1)
      expect(character.attributes.at(1).modifier()).toEqual(0)
      expect(character.attributes.at(2).modifier()).toEqual(5)
      expect(character.attributes.at(3).modifier()).toEqual(0)
    })

    it('returns modifierText', () => {
      expect(character.attributes.at(0).modifierText()).toEqual('Foo: 1')
      expect(character.attributes.at(2).modifierText()).toEqual('Foo: 4, Foo: 1')
    })

    it('computes string values as math expressions', () => {
      expect(character.attributes.findBy('name', 'Body').value()).toEqual((3 + 4 + 10) / 3)
    })
  })

  describe('when detached', () => {
    const STR = Attribute.create({ name: 'Strength', value: 10 })

    it('returns a modifiedValue equal to its value', () => {
      expect(STR.modifiedValue()).toEqual(STR.value())
    })

    it('returns a modifier of 0', () => {
      expect(STR.modifier()).toEqual(0)
    })

    it('returns "" for modifierText', () => {
      expect(STR.modifierText()).toEqual('')
    })
  })

  describe('regardless of attachment', () => {
    it('computes id based on name', () => {
      const attribute = Attribute.create({ name: 'Foo - Bar!! Baz!?' })
      expect(attribute.id).toEqual('foobarbaz')

      attribute.set('name', '!!!! :D D: EEEEEE!!')
      expect(attribute.id).toEqual('ddeeeeee')
    })

    it('converts snapshot.value to model.raw', () => {
      const numberAttribute = Attribute.create({ name: 'foo', value: 123 })
      expect(numberAttribute.raw).toEqual(123)

      const stringAttribute = Attribute.create({ name: 'foo', value: 'abc' })
      expect(stringAttribute.raw).toEqual('abc')
    })

    it('.value returns numeric values unaltered', () => {
      const attribute = Attribute.create({ name: 'foo', value: 123 })
      expect(attribute.raw).toEqual(123)
      expect(attribute.value()).toEqual(123)
    })
  })
})
