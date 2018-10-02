import Character from './Character'

describe('models/Character', () => {
  let character
  beforeEach(() => {
    character = Character.create({
      attributes: [
        { displayName: 'Strength', id: 'STR', value: 4 },
        { displayName: 'Dexterity', id: 'DEX', value: 2 },
        { displayName: 'Stamina', id: 'STA', value: 3 },
      ],
      conditions: ['vs Orcs'],
      items: [{
        displayName: 'Greatsword of Greenblood Bane',
        effects: [
          { condition: 'vs Goblins', modifier: 1, modifies: 'STR' },
          { condition: 'vs Orcs', modifier: 1, modifies: 'STR' },
        ],
        equipped: true,
      }],
      spells: [{
        displayName: 'Favored Enemy: Goblinoid',
        effects: [
          { condition: 'vs Goblins', modifier: 1, modifies: 'STR' },
          { condition: 'vs Orcs', modifier: 1, modifies: 'STR' },
        ],
        isActive: true,
      }],
      traits: [{
        displayName: 'Favored Enemy: Goblinoid',
        effects: [
          { condition: 'vs Goblins', modifier: 1, modifies: 'STR' },
          { condition: 'vs Orcs', modifier: 1, modifies: 'STR' },
        ],
      }],
    })
  })

  describe('effects', () => {
    it('lists all effects in priority order', () => {
      expect(character.effects).toHaveLength(6)
    })
  })

  describe('activeEffects', () => {
    it('filters out inapplicables, unequipped items, inactive spells', () => {
      expect(character.activeEffects).toHaveLength(3)

      character.items.at(0).set('equipped', false)
      expect(character.activeEffects).toHaveLength(2)

      character.spells.at(0).set('isActive', false)
      expect(character.activeEffects).toHaveLength(1)
    })
  })
})
