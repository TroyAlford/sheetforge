import Character from './Character'
import Effect from './Effect'

describe('models/Effect', () => {
  const mageArmor = Effect.create({
    isActive: true,
    displayName: 'Mage Armor',
    modifies: { ARMOR: 4 },
  })

  describe('isApplicable', () => {
    it('applies or not as a child of Character', () => {
      const character = Character.create({
        conditions: ['vs Goblins'],
        effects: [{
          isActive: true,
          condition: 'vs Goblins',
          displayName: '+1 vs Goblins',
          modifies: { STR: 1 },
        }, {
          isActive: true,
          condition: 'vs Orcs',
          displayName: '+1 vs Orcs',
          modifies: { STR: 1 },
        }],
      })

      expect(character.effects[0].isApplicable).toEqual(true)
      expect(character.effects[1].isApplicable).toEqual(false)
    })

    it('applies or not as a grandchild of Character', () => {
      const character = Character.create({
        conditions: ['vs Goblins'],
        items: [{
          displayName: 'Goblin Bane Greatsword',
          equipped: false,
          effects: [{
            isActive: true,
            condition: 'vs Goblins',
            displayName: '+1 vs Goblins',
            modifies: { STR: 1 },
          }, {
            isActive: true,
            condition: 'vs Orcs',
            displayName: '+1 vs Orcs',
            modifies: { STR: 1 },
          }],
        }],
      })

      expect(character.items[0].effects[0].isApplicable).toEqual(true)
      expect(character.items[0].effects[1].isApplicable).toEqual(false)
    })
  })
  describe('modifierFor', () => {
    it('returns correct value for a valid key', () => {
      expect(mageArmor.modifierFor('ARMOR')).toEqual(4)
    })

    it('returns 0 as value for an unknown key', () => {
      expect(mageArmor.modifierFor('STR')).toEqual(0)
    })
  })

  it('requires displayName', () => {
    expect(() => { Effect.create() }).toThrow(/displayName/)
  })
})
