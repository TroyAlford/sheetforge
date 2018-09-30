import Character from './Character'

describe('models/Character', () => {
  let character
  beforeEach(() => {
    character = Character.create({
      conditions: ['vs Orcs'],
      items: [{
        displayName: 'Greatsword of Greenblood Bane',
        effects: [
          { condition: 'vs Goblins', modifier: 1, modifies: 'I-ATK' },
          { condition: 'vs Orcs', modifier: 1, modifies: 'I-ATK' },
        ],
        equipped: true,
      }],
      spells: [{
        displayName: 'Favored Enemy: Goblinoid',
        effects: [
          { condition: 'vs Goblins', modifier: 1, modifies: 'S-ATK' },
          { condition: 'vs Orcs', modifier: 1, modifies: 'S-ATK' },
        ],
        isActive: true,
      }],
      traits: [{
        displayName: 'Favored Enemy: Goblinoid',
        effects: [
          { condition: 'vs Goblins', modifier: 1, modifies: 'T-ATK' },
          { condition: 'vs Orcs', modifier: 1, modifies: 'T-ATK' },
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
