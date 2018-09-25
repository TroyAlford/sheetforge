import { types } from 'mobx-state-tree'
import HealthLevel from './HealthLevel'

describe('models/HealthLevel', () => {
  describe('onCreate', () => {
    it('defaults damage to "none"', () => {
      const healthLevel = HealthLevel.create({ displayName: 'Foo!' })
      expect(healthLevel.damage).toEqual('none')
    })
  })

  describe('if detached', () => {
    it('damage() adjusts own health level', () => {
      const healthLevel = HealthLevel.create({ damage: 'none', displayName: 'Healthy' });

      ['none', 'light', 'heavy', 'bane', 'light', 'none', 'heavy', 'none'].forEach((severity) => {
        healthLevel.apply(severity)
        expect(healthLevel.damage).toEqual(severity)
      })
    })

    it('heal() sets health level to "ok"', () => {
      const healthLevel = HealthLevel.create({ damage: 'bane', displayName: 'Healthy' })

      healthLevel.heal()
      expect(healthLevel.damage).toEqual('none')
    })
  })

  describe('if attached', () => {
    const HealthBar = types.array(HealthLevel)
    let healthBar

    beforeEach(() => {
      healthBar = HealthBar.create([
        { damage: 'none', displayName: 'Healthy' },
        { damage: 'none', displayName: 'Bruised' },
        { damage: 'none', displayName: 'Wounded' },
        { damage: 'none', displayName: 'Crippled' },
        { damage: 'none', displayName: 'Incapacitated' },
      ])
    })

    it('can determine its own index', () => {
      healthBar.forEach((healthLevel, index) => {
        expect(healthLevel.index).toEqual(index)
      })
    })

    it('damage() adjusts adjacent health levels', () => {
      expect(healthBar.map(hl => hl.damage))
        .toEqual(['none', 'none', 'none', 'none', 'none'])

      healthBar[3].apply('light')

      expect(healthBar.map(hl => hl.damage))
        .toEqual(['light', 'light', 'light', 'light', 'none'])

      healthBar[2].apply('bane')

      expect(healthBar.map(hl => hl.damage))
        .toEqual(['bane', 'bane', 'bane', 'light', 'none'])

      healthBar[1].apply('none')

      expect(healthBar.map(hl => hl.damage))
        .toEqual(['bane', 'none', 'none', 'none', 'none'])
    })

    it('heal() adjusts adjacent health levels', () => {
      expect(healthBar.map(hl => hl.damage)).toEqual(['none', 'none', 'none', 'none', 'none'])

      healthBar[4].apply('bane')
      expect(healthBar.map(hl => hl.damage)).toEqual(['bane', 'bane', 'bane', 'bane', 'bane'])

      healthBar[2].heal()
      expect(healthBar.map(hl => hl.damage)).toEqual(['bane', 'bane', 'none', 'none', 'none'])
    })
  })
})
