import { types } from 'mobx-state-tree'
import Spell from './Spell'
import CollectionOf from '@/models/generic/Collection'
import Resource from '@/models/Resource'

const DummyCharacter = types.model({
  isCharacter: true,
  resources: CollectionOf(Resource),
  spells: CollectionOf(Spell),
})

describe('models/Spell', () => {
  describe('when attached', () => {
    let character

    beforeEach(() => {
      character = DummyCharacter.create({
        resources: [
          { current: 6, maximum: 10, name: 'Mana' },
          { current: 8, maximum: 8, name: 'Willpower' },
        ],
        spells: [{
          costs: [{ amount: 8, resource: 'Mana' }],
          name: 'Unaffordable - mana cost too high',
        }, {
          costs: [{ amount: 5, resource: 'Rage' }],
          name: 'Unaffordable - costs unavailable resource',
        }, {
          costs: [{ amount: 5, resource: 'Mana' }],
          name: 'Affordable Spell',
        }, {
          costs: [{ amount: 3, resource: 'Mana' }, { amount: 1, resource: 'Willpower' }],
          name: 'Affordable Spell',
        }, {
          name: 'Free Spell (Affordable)',
        }],
      })
    })

    it('determines isAffordable based on character resources', () => {
      expect(character.spells.at(0).isAffordable).toEqual(false)
      expect(character.spells.at(2).isAffordable).toEqual(true)
      expect(character.spells.at(3).isAffordable).toEqual(true)
      expect(character.spells.at(4).isAffordable).toEqual(true)
    })

    it('errors on unresolvable resource references', () => {
      expect(() => character.spells.at(1).isAffordable).toThrow(/Failed to resolve reference 'Rage'/)
    })

    it('can spend character resources', () => {
      const mana = character.resources.at(0)
      const will = character.resources.at(1)
      const spell = character.spells.at(3)
      const manaCost = spell.costs.at(0)
      const willCost = spell.costs.at(1)

      expect(spell.isAffordable).toEqual(true)
      expect(manaCost.amount).toEqual(3)
      expect(willCost.amount).toEqual(1)
      expect(mana.current).toEqual(6)
      expect(will.current).toEqual(8)

      spell.cast()

      expect(mana.current).toEqual(3)
      expect(will.current).toEqual(7)
      expect(spell.isAffordable).toEqual(true)

      spell.cast()

      expect(mana.current).toEqual(0)
      expect(will.current).toEqual(6)
      expect(spell.isAffordable).toEqual(false)
    })
  })

  describe('when unattached', () => {
    it('isAffordable is always true', () => {
      const spell = Spell.create({
        cost: [{ amount: 25, resource: 'Mana' }],
        level: 9,
        name: 'Big Bad Spell',
      })

      expect(spell.isAffordable).toEqual(true)
    })
  })
})
