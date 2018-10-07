import Character from './Character'

describe('models/Character', () => {
  let character
  beforeEach(() => {
    character = Character.create({
      attributes: [
        { name: 'Strength', value: 4 },
        { name: 'Dexterity', value: 2 },
        { name: 'Stamina', value: 3 },
      ],
      conditions: ['vs Orcs'],
      items: [{
        effects: [
          { condition: 'vs Goblins', modifier: 1, target: 'Strength' },
          { condition: 'vs Orcs', modifier: 1, target: 'Strength' },
        ],
        equipped: true,
        name: 'Greatsword of Greenblood Bane',
      }],
      spells: [{
        effects: [
          { condition: 'vs Goblins', modifier: 1, target: 'STR' },
          { condition: 'vs Orcs', modifier: 1, target: 'STR' },
        ],
        isActive: true,
        name: 'Favored Enemy: Goblinoid',
      }],
      traits: [{
        effects: [
          { condition: 'vs Goblins', modifier: 1, target: 'STR' },
          { condition: 'vs Orcs', modifier: 1, target: 'STR' },
        ],
        name: 'Favored Enemy: Goblinoid',
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
