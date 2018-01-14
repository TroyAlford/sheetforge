import AxisCharacter from './AxisCharacter'

jest.unmock('./Character')

describe('Character', () => {
  it('calculates default attributes', () => {
    const character = new AxisCharacter()

    expect(character.modifierFor('acuity')).toBe(-1)
    expect(character.modifierFor('agility')).toBe(-1)
    expect(character.modifierFor('confidence')).toBe(-1)
    expect(character.modifierFor('devotion')).toBe(-1)
    expect(character.modifierFor('fitness')).toBe(-1)
    expect(character.modifierFor('focus')).toBe(-1)
    expect(character.modifierFor('intellect')).toBe(-1)
    expect(character.modifierFor('intuition')).toBe(-1)
    expect(character.modifierFor('strength')).toBe(-1)

    expect(character.modifierFor('size')).toBe(0)

    expect(character.modifierFor('accuracy')).toBe(-1)
    expect(character.modifierFor('body')).toBe(-1)
    expect(character.modifierFor('damageThreshold')).toBe(1)
    expect(character.modifierFor('might')).toBe(-1)
    expect(character.modifierFor('mind')).toBe(-1)
    expect(character.modifierFor('potency')).toBe(-1)
    expect(character.modifierFor('reflex')).toBe(-1)
    expect(character.modifierFor('resilience')).toBe(-1)
    expect(character.modifierFor('spirit')).toBe(-1)
    expect(character.modifierFor('toughness')).toBe(-1)
  })
})
