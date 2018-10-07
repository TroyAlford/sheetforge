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
          { current: 6, displayName: 'Mana', maximum: 10 },
          { current: 8, displayName: 'Willpower', maximum: 8 },
        ],
        spells: [{
          costs: [{ amount: 8, resource: 'Mana' }],
          displayName: 'Unaffordable - mana cost too high',
        }, {
          costs: [{ amount: 5, resource: 'Rage' }],
          displayName: 'Unaffordable - costs unavailable resource',
        }, {
          costs: [{ amount: 5, resource: 'Mana' }],
          displayName: 'Affordable Spell',
        }, {
          costs: [{ amount: 3, resource: 'Mana' }, { amount: 1, resource: 'Willpower' }],
          displayName: 'Affordable Spell',
        }, {
          displayName: 'Free Spell (Affordable)',
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
        displayName: 'Big Bad Spell',
        level: 9,
      })

      expect(spell.isAffordable).toEqual(true)
    })
  })
})
