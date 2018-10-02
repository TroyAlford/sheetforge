import Effect from './Effect'
import Character from '@/models/Character'

describe('models/Effect', () => {
  const mageArmor = Effect.create({
    modifies: 'ARMOR',
  })
  const character = Character.create({
    attributes: [
      { displayName: 'Strength', id: 'STR', value: 10 },
    ],
    conditions: ['vs Goblins'],
    traits: [{
      displayName: 'Favored Enemy: Greenbloods',
      effects: [
        { condition: 'vs Goblins', modifier: 1, modifies: 'STR' },
        { condition: 'vs Orcs', modifier: 1, modifies: 'STR' },
      ],
      equipped: true,
    }],
  })

  describe('isApplicable', () => {
    it('applies or not as a child of Character', () => {
      expect(character.effects[0].isApplicable).toEqual(true)
      expect(character.effects[1].isApplicable).toEqual(false)
    })

    it('applies or not as a grandchild of Character', () => {
      expect(character.effects[0].isApplicable).toEqual(true)
      expect(character.effects[1].isApplicable).toEqual(false)
    })
  })
  describe('availableTargets', () => {
    it('returns [] if unattached', () => {
      expect(mageArmor.availableTargets).toEqual([])
    })
    it('returns a list if attached', () => {
      expect(character.effects[0].availableTargets).toEqual(character.attributes.asArray)
    })
  })
})
