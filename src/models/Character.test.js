import Character from './Character'

jest.unmock('./Character')

describe('Character', () => {
  it('calculates active layers', () => {
    const character = new Character()

    expect(character.layers).toHaveLength(0)
    expect(character.modifiers).toHaveLength(0)

    character.layers.push({ inactive: true })
    expect(character.layers).toHaveLength(1)
    expect(character.modifiers).toHaveLength(0)

    character.layers[0].inactive = false
    expect(character.layers).toHaveLength(1)
    expect(character.modifiers).toHaveLength(1)
  })

  it('applies layers via constructor', () => {
    const character = new Character({
      layers: [{ inactive: true }, {}]
    })

    expect(character.layers).toHaveLength(2)
    expect(character.modifiers).toHaveLength(1)
  })

  it('calculates attributes from active layers', () => {
    const character = new Character({
      layers: [
        { strength: 1, fitness: 2, agility: 3 },
        { strength: 3, fitness: 2, agility: 1 },
      ],
    })

    expect(character.modifierFor('strength')).toBe(4)
    expect(character.modifierFor('fitness')).toBe(4)
    expect(character.modifierFor('agility')).toBe(4)
    expect(character.sumOf('strength', 'fitness', 'agility')).toBe(12)
    expect(character.averageOf('strength', 'fitness', 'agility')).toBe(4)

    character.layers[1].inactive = true
    expect(character.modifierFor('strength')).toBe(1)
    expect(character.modifierFor('fitness')).toBe(2)
    expect(character.modifierFor('agility')).toBe(3)
    expect(character.averageOf('strength', 'fitness', 'agility')).toBe(2)
  })

  it('calculates active effect modifiers', () => {
    const character = new Character({
      layers: [{ STR: 1, CON: 1, DEX: 1 }],
      effects: [{ name: 'Cat\'s Grace', active: true, modifiers: { DEX: 2 } }],
      equipment: [{ name: 'Bracers of Strength', equipped: true, modifiers: { STR: 2 } }],
    })

    expect(character.modifierFor('STR')).toBe(3)
    expect(character.modifierFor('DEX')).toBe(3)
    expect(character.modifierFor('CON')).toBe(1)

    character.equipment.push({ name: 'Belt of Constitution', equipped: true, modifiers: { CON: 2 } })
    expect(character.modifierFor('CON')).toBe(3)

    character.equipment[0].equipped = false
    expect(character.modifierFor('STR')).toBe(1)

    character.effects[0].active = false
    expect(character.modifierFor('DEX')).toBe(1)

    character.equipment[1].modifiers.CON = 4
    expect(character.modifierFor('CON')).toBe(5)
  })
})
