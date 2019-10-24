import Character from './Character'

jest.useFakeTimers()

describe('models/Character', () => {
  let character
  beforeEach(() => {
    character = new Character({
      attributes: [
        { name: 'Strength', value: 4 },
        { name: 'Agility', value: 2 },
        { name: 'Fitness', value: 3 },
      ],
      items: [{
        effects: [
          { condition: 'vs Orcs', modifier: 1, target: 'strength' },
          { condition: 'vs Goblins', modifier: 2, target: 'strength' },
        ],
        equipped: true,
        name: 'Greatsword of Greenblood Bane',
      }],
      skills: [
        /* eslint-disable sort-keys */
        { name: 'Combat: Sword & Board', theory: 4, mastery: 3 },
        /* eslint-enable sort-keys */
      ],
      spells: [{
        effects: [
          { condition: 'vs Orcs', modifier: 1, target: 'agility' },
          { condition: 'vs Goblins', modifier: 2, target: 'agility' },
        ],
        isActive: true,
        name: 'Favored Enemy: Goblinoid',
      }],
      traits: [{
        effects: [
          { condition: 'vs Orcs', modifier: 1, target: 'fitness' },
          { condition: 'vs Goblins', modifier: 2, target: 'fitness' },
          { condition: 'vs Goblins', modifier: 2, target: 'sword___board' },
        ],
        name: 'Favored Enemy: Goblinoid',
      }],

      state: { // eslint-disable-line sort-keys
        conditions: ['vs Orcs'],
      },
    })
  })

  it('lists all effects in priority order', () => {
    expect(character.effects).toHaveLength(7)
    const expected = [
      ...character.traits[0].effects,
      ...character.spells[0].effects,
      ...character.items[0].effects,
    ]
    character.effects.forEach((effect, i) => expect(effect).toMatchObject(expected[i]))
  })

  it('filters inapplicable effects, unequipped items, inactive spells', () => {
    expect(character.effects.active).toHaveLength(3)

    character.set('items[0].equipped', false)
    expect(character.effects.active).toHaveLength(2)

    character.set('spells[0].isActive', false)
    expect(character.effects.active).toHaveLength(1)
  })

  it('adds effects when its children do', () => {
    expect(character.effects).toHaveLength(7)

    character.traits[0].effects.push({ modifier: 2, target: 'STR' })
    expect(character.effects).toHaveLength(8)

    character.spells[0].effects.push({ modifier: 2, target: 'DEX' })
    expect(character.effects).toHaveLength(9)

    character.items[0].effects.push({ modifier: 2, target: 'STA' })
    expect(character.effects).toHaveLength(10)
  })

  describe('change tracking', () => {
    it('reports real changes, with collection name', () => {
      jest.runAllTimers()
      const onChange = jest.fn()
      character.on('change', onChange)
      character.attributes[0].value = 5

      jest.runAllTimers()
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenLastCalledWith('attributes', expect.objectContaining({
        newValue: 5,
        previousValue: 4,
        property: 'value',
      }))
    })

    it('omits reporting non-meaningful changes', () => {
      const onChange = jest.fn()
      character.on('change', onChange)
      character.attributes[0].value = 4 // already 4

      jest.runAllTimers()
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  // it('sorts, alphabetizes, and only returns unique availableConditions', () => {
  //   expect(character.CACHE.conditions).toBe(undefined)
  //   expect(character.conditions.slice()).toEqual(['vs Goblins', 'vs Orcs'])
  //   expect(character.conditions.active.slice()).toEqual(['vs Orcs'])
  //   expect(character.CACHE.conditions).not.toBe(undefined)

  //   character.conditions.activate('vs Evil')
  //   jest.runAllTimers()
  //   expect(character.CACHE.conditions).toBe(undefined)
  //   expect(character.conditions.slice()).toEqual(['vs Evil', 'vs Goblins', 'vs Orcs'])
  //   expect(character.conditions.active.slice()).toEqual(['vs Evil', 'vs Orcs'])
  // })

  // it('resolves symbol values', () => {
  //   character.compute()
  //   console.log(character.CACHE.values, character.CACHE.modifiers)
  //   expect(character.CACHE.values.attributes$strength$value).toEqual(4)
  // })
})
