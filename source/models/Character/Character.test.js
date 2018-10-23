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
          { condition: 'vs Orcs', modifier: 1, target: 'Strength' },
          { condition: 'vs Goblins', modifier: 1, target: 'Strength' },
        ],
        equipped: true,
        name: 'Greatsword of Greenblood Bane',
      }],
      spells: [{
        effects: [
          { condition: 'vs Orcs', modifier: 1, target: 'STR' },
          { condition: 'vs Goblins', modifier: 1, target: 'STR' },
        ],
        isActive: true,
        name: 'Favored Enemy: Goblinoid',
      }],
      traits: [{
        effects: [
          { condition: 'vs Orcs', modifier: 1, target: 'STR' },
          { condition: 'vs Goblins', modifier: 1, target: 'STR' },
        ],
        name: 'Favored Enemy: Goblinoid',
      }],
    })
  })

  it('lists all effects in priority order', () => {
    expect(character.effects()).toHaveLength(6)
  })

  it('filters inapplicable effects, unequipped items, inactive spells', () => {
    expect(character.activeEffects()).toHaveLength(3)

    character.items.at(0).set('equipped', false)
    expect(character.activeEffects()).toHaveLength(2)

    character.spells.at(0).set('isActive', false)
    expect(character.activeEffects()).toHaveLength(1)
  })

  it('adds effects when its children do', () => {
    expect(character.effects()).toHaveLength(6)

    character.traits.at(0).effects.push({ modifier: 2, target: 'STR' })
    expect(character.effects()).toHaveLength(7)

    character.spells.at(0).effects.push({ modifier: 2, target: 'DEX' })
    expect(character.effects()).toHaveLength(8)

    character.items.at(0).effects.push({ modifier: 2, target: 'STA' })
    expect(character.effects()).toHaveLength(9)
  })

  it('sorts, alphabetizes, and only returns unique availableConditions', () => {
    expect(character.availableConditions()).toEqual(['vs Goblins', 'vs Orcs'])
  })
})
