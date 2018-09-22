import { types } from 'mobx-state-tree'
import Spell from './Spell'
import Spendable from './Spendable'

const DummyCharacter = types.model({
  spells: types.array(Spell),
  spendables: types.map(Spendable),
})

describe('models/Spell', () => {
  it('requires displayName', () => {
    expect(() => Spell.create()).toThrow(/displayName.*is not a string/)
  })

  describe('when attached', () => {
    let character

    beforeEach(() => {
      character = DummyCharacter.create({
        spells: [{
          cost: { mana: 8 },
          displayName: 'Unaffordable - mana cost too high',
        }, {
          cost: { rage: 5 },
          displayName: 'Unaffordable - costs unavailable resource',
        }, {
          cost: { mana: 5 },
          displayName: 'Affordable Spell',
        }, {
          cost: { mana: 3, willpower: 1 },
          displayName: 'Affordable Spell',
        }, {
          displayName: 'Free Spell (Affordable)',
        }],
        spendables: {
          mana: { current: 6, maximum: 10 },
          willpower: { current: 8, maximum: 8 },
        },
      })
    })

    it('determines isAffordable based on character Spendables', () => {
      expect(character.spells[0].isAffordable).toEqual(false)
      expect(character.spells[1].isAffordable).toEqual(false)
      expect(character.spells[2].isAffordable).toEqual(true)
      expect(character.spells[3].isAffordable).toEqual(true)
      expect(character.spells[4].isAffordable).toEqual(true)
    })

    it('can spend character resources', () => {
      expect(character.spells[3].isAffordable).toEqual(true)
      expect(character.spells[3].cost.get('mana')).toEqual(3)
      expect(character.spells[3].cost.get('willpower')).toEqual(1)
      expect(character.spendables.get('mana').current).toEqual(6)
      expect(character.spendables.get('willpower').current).toEqual(8)

      character.spells[3].cast()

      expect(character.spendables.get('mana').current).toEqual(3)
      expect(character.spendables.get('willpower').current).toEqual(7)
      expect(character.spells[3].isAffordable).toEqual(true)

      character.spells[3].cast()

      expect(character.spendables.get('mana').current).toEqual(0)
      expect(character.spendables.get('willpower').current).toEqual(6)
      expect(character.spells[3].isAffordable).toEqual(false)
    })
  })

  describe('when unattached', () => {
    it('isAffordable is always true', () => {
      const spell = Spell.create({
        cost: { mana: 25 },
        displayName: 'Big Bad Spell',
        level: 9,
      })

      expect(spell.isAffordable).toEqual(true)
    })
  })
})
