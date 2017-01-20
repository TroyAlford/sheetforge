jest.unmock('./Character')

import Character from './Character'

describe('Character', () => {
  it('adds simple numeric attributes from active layers', () => {
    const character = new Character({
      layers: [{
        active: true,
        attributes: { str: 1, dex: 1, con: 1 },
      }, {
        active: true,
        attributes: { str: 2, dex: 3, con: -2 },
      }, {
        active: false,
        attributes: { str: 1, dex: -4, con: 1 },
      }]
    })

    const attrs = character.Attributes
    expect(attrs.str).toEqual(3)  // Active: 1 +  2 = 3
    expect(attrs.dex).toEqual(4)  // Active: 1 +  3 = 4
    expect(attrs.con).toEqual(-1) // Active: 1 + -2 = -1
  })

  it('calculates properly formed attribute equations correctly', () => {
    const layers = [{ active: true, attributes: { A: 2, B: 4, AxB: 'A * B' } }]
    const character = new Character({ layers }, { attribute: { value: 0, max: 20 } })
    const attrs = character.Attributes

    expect(attrs.A).toEqual(2)
    expect(attrs.B).toEqual(4)
    expect(attrs.AxB).toEqual(8)
  })
})
