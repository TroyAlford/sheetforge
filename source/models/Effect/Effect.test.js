import Effect from './Effect'
import Character from '@/models/Character'

describe('models/Effect', () => {
  const mageArmor = Effect.create({
    modifies: 'ARMOR',
  })
  const character = Character.create({
    attributes: [
      { name: 'Strength', value: 10 },
    ],
    conditions: ['vs Goblins'],
    traits: [{
      effects: [
        { condition: 'vs Goblins', modifier: 1, modifies: 'STR' },
        { condition: 'vs Orcs', modifier: 1, modifies: 'STR' },
      ],
      equipped: true,
      name: 'Favored Enemy: Greenbloods',
    }],
  })

  describe('isApplicable()', () => {
    it('applies or not as a child of Character', () => {
      expect(character.effects()[0].isApplicable()).toEqual(true)
      expect(character.effects()[1].isApplicable()).toEqual(false)
    })

    it('applies or not as a grandchild of Character', () => {
      expect(character.effects()[0].isApplicable()).toEqual(true)
      expect(character.effects()[1].isApplicable()).toEqual(false)
    })
  })
  describe('available', () => {
    it('returns [] if unattached', () => {
      expect(mageArmor.available().asArray).toEqual([])
    })
    it('returns a list if attached', () => {
      expect(character.effects()[0].available()).toEqual(character.attributes)
    })
  })
})
