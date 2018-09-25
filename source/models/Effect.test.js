import Character from './Character'
import Effect from './Effect'

describe('models/Effect', () => {
  const mageArmor = Effect.create({
    displayName: 'Mage Armor',
    isActive: true,
    modifies: { ARMOR: 4 },
  })

  describe('isApplicable', () => {
    it('applies or not as a child of Character', () => {
      const character = Character.create({
        conditions: ['vs Goblins'],
        effects: [{
          condition: 'vs Goblins',
          displayName: '+1 vs Goblins',
          isActive: true,
          modifies: { STR: 1 },
        }, {
          condition: 'vs Orcs',
          displayName: '+1 vs Orcs',
          isActive: true,
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
          effects: [{
            condition: 'vs Goblins',
            displayName: '+1 vs Goblins',
            isActive: true,
            modifies: { STR: 1 },
          }, {
            condition: 'vs Orcs',
            displayName: '+1 vs Orcs',
            isActive: true,
            modifies: { STR: 1 },
          }],
          equipped: false,
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
