import { types } from 'mobx-state-tree'
import HealthLevel from './HealthLevel'

describe('models/HealthLevel', () => {
  it('requires displayName', () => {
    expect(() => HealthLevel.create())
      .toThrow(/displayName.*is not a string/)
  })

  it('requires damageType', () => {
    expect(() => HealthLevel.create({ displayName: 'Foo!' }))
      .toThrow(/damageType.*not assignable.*"none" \| "bashing" \| "lethal" \| "aggravated"/)
  })

  describe('if attached', () => {
    const HealthBar = types.array(HealthLevel)
    let healthBar

    beforeEach(() => {
      healthBar = HealthBar.create([
        { displayName: 'Healthy', damageType: 'none' },
        { displayName: 'Healthy', damageType: 'none' },
        { displayName: 'Healthy', damageType: 'none' },
        { displayName: 'Healthy', damageType: 'none' },
        { displayName: 'Healthy', damageType: 'none' },
      ])
    })

    it('can determine its own index', () => {
      healthBar.forEach((healthLevel, index) => {
        expect(healthLevel.index).toEqual(index)
      })
    })

    it('damage() adjusts adjacent health levels', () => {
      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['none', 'none', 'none', 'none', 'none'])

      healthBar[1].damage('bashing')

      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['none', 'bashing', 'bashing', 'bashing', 'bashing'])

      healthBar[2].damage('aggravated')

      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['none', 'bashing', 'aggravated', 'aggravated', 'aggravated'])

      healthBar[3].damage('none')

      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['none', 'bashing', 'aggravated', 'none', 'none'])
    })
  })
})
