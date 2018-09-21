import Character from './Character'

describe('models/Character', () => {
  describe('activeItemEffects', () => {
    it('filters out nulls & unequipped item effects, ignores isActive', () => {
      const character = Character.create({
        items: [
          { displayName: 'Item 1', equipped: true },
          {
            displayName: 'Item 2',
            equipped: true,
            effects: [{
              displayName: 'Item Effect 1',
              isActive: false,
              modifies: { STR: 1 },
            }],
          },
        ],
      })

      expect(character.items[0].equipped).toBe(true)
      expect(character.activeItemEffects).toHaveLength(1)

      character.items[1].set('equipped', false)
      expect(character.items[1].equipped).toBe(false)
      expect(character.activeItemEffects).toHaveLength(0)
    })

    it('filters out inapplicables', () => {
      const character = Character.create({
        conditions: ['vs Orcs'],
        items: [{
          displayName: 'Greatsword of Goblinoid Bane',
          effects: [{
            condition: 'vs Orcs',
            displayName: 'Item Effect 1',
            modifies: { STR: 1 },
          }, {
            condition: 'vs Goblins',
            displayName: 'Item Effect 2',
            modifies: { DEX: 1 },
          }],
          equipped: true,
        }],
      })

      expect(character.activeItemEffects).toHaveLength(1)
    })
  })

  describe('activeTraitEffects', () => {
    it('filters out nulls and ignores isActive', () => {
      const character = Character.create({
        traits: [
          { displayName: 'Trait 1' },
          {
            displayName: 'Trait 2',
            effects: [{
              displayName: 'Trait Effect 1',
              isActive: false,
              modifies: { STR: 1 },
            }],
          },
        ],
      })

      expect(character.activeTraitEffects).toHaveLength(1)
    })

    it('filters out inapplicables', () => {
      const character = Character.create({
        conditions: ['vs Orcs'],
        traits: [{
          displayName: 'Favored Enemy: Goblinoid',
          effects: [{
            condition: 'vs Orcs',
            displayName: 'Trait Effect 1',
            modifies: { STR: 1 },
          }, {
            condition: 'vs Goblins',
            displayName: 'Trait Effect 2',
            modifies: { DEX: 1 },
          }],
        }],
      })

      expect(character.activeTraitEffects).toHaveLength(1)
    })
  })

  describe('activeEffects', () => {
    it('filters out inactives', () => {
      const character = Character.create({
        effects: [{
          displayName: 'Buff Effect 1',
          isActive: false,
          modifies: { STR: 1 },
        }, {
          displayName: 'Buff Effect 2',
          isActive: true,
          modifies: { DEX: 1 },
        }],
      })

      expect(character.activeEffects).toHaveLength(1)
    })

    it('filters out inapplicables', () => {
      const character = Character.create({
        conditions: ['vs Orcs'],
        effects: [{
          condition: 'vs Orcs',
          displayName: 'Buff Effect 1',
          isActive: true,
          modifies: { STR: 1 },
        }, {
          condition: 'vs Goblins',
          displayName: 'Buff Effect 2',
          isActive: true,
          modifies: { DEX: 1 },
        }],
      })

      expect(character.activeEffects).toHaveLength(1)
    })
  })
})
