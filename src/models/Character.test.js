jest.unmock('./Character')

import Character from './Character'

describe('Character', () => {
  it('adds simple numeric attributes from active layers', () => {
    const character = new Character({
      layers: [
        { attributes: { str: 1, dex: 1, con: 1 } },
        { attributes: { str: 2, dex: 3, con: -2 } },
        { active: false, attributes: { str: 1, dex: -4, con: 1 } }
      ]
    })

    const attrs = character.Attributes
    expect(attrs.str).toEqual(3)  // Active: 1 +  2 = 3
    expect(attrs.dex).toEqual(4)  // Active: 1 +  3 = 4
    expect(attrs.con).toEqual(-1) // Active: 1 + -2 = -1
  })

  it('calculates attribute equations', () => {
    const character = new Character({ layers: [{ attributes: { A: 'B * C', B: 2, C: 4 } }] })
    const attrs = character.Attributes

    expect(attrs.A).toEqual(8)
    expect(attrs.B).toEqual(2)
    expect(attrs.C).toEqual(4)
  })

  it('handles circular reference equations without a base layer set to defaults', () => {
    const character = new Character({ layers: [{ attributes: { A: 'B', B: 'C', C: 'A' } }] })
    const attrs = character.Attributes

    expect(attrs.A).toEqual(0)
    expect(attrs.B).toEqual(0)
    expect(attrs.C).toEqual(0)
  })

  it('handles circular reference equations across layers sequentially', () => {
    const character = new Character({
      layers: [
        { attributes: { A:  1 , B:  2 , C:  3  } },
        { attributes: { C: 'A', A: 'B', B: 'C', D: 'A + B + C' } },
      ]
    })
    const attrs = character.Attributes

    expect(attrs.A).toEqual(2)
    expect(attrs.B).toEqual(3)
    expect(attrs.C).toEqual(1)
    expect(attrs.D).toEqual(6)
  })

  it('aggregates effects appropriately', () => {
    const character = new Character({
      effects: {
        'vs Evil': { str: 3, dmg: 1 }, // Third, str = 6 + 3 = 9
        'vs Undead': { str: 1 },
      },
      equipment: [
        { effects: { 'vs Evil': { str: 'str * 3', dmg: 1 } } }, // Second, str = 2 * 3 = 6
        { effects: { 'vs Undead': { str: 1 } } },
      ],
      layers: [
        { effects: { 'vs Evil': { str: 2, dmg: 1 } } }, // First, str = 2
        { effects: { 'vs Undead': { str: 1 } } },
      ]
    })
    const effects = character.Effects

    expect(Object.keys(effects)).toHaveLength(2)
    expect(effects['vs Evil']).toEqual({ str: 9, dmg: 3 })
    expect(effects['vs Undead']).toEqual({ str: 3 })
  })
})
