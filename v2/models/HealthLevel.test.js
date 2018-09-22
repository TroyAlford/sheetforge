import { types } from 'mobx-state-tree'
import HealthLevel from './HealthLevel'

describe('models/HealthLevel', () => {
  it('requires displayName', () => {
    expect(() => HealthLevel.create())
      .toThrow(/displayName.*is not a string/)
  })

  it('requires damageType', () => {
    expect(() => HealthLevel.create({ displayName: 'Foo!' }))
      .toThrow(/damageType.*not assignable.*"ok" \| "light" \| "heavy" \| "bane"/)
  })

  describe('if attached', () => {
    const HealthBar = types.array(HealthLevel)
    let healthBar

    beforeEach(() => {
      healthBar = HealthBar.create([
        { displayName: 'Healthy', damageType: 'ok' },
        { displayName: 'Healthy', damageType: 'ok' },
        { displayName: 'Healthy', damageType: 'ok' },
        { displayName: 'Healthy', damageType: 'ok' },
        { displayName: 'Healthy', damageType: 'ok' },
      ])
    })

    it('can determine its own index', () => {
      healthBar.forEach((healthLevel, index) => {
        expect(healthLevel.index).toEqual(index)
      })
    })

    it('damage() adjusts adjacent health levels', () => {
      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['ok', 'ok', 'ok', 'ok', 'ok'])

      healthBar[1].damage('light')

      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['ok', 'light', 'light', 'light', 'light'])

      healthBar[2].damage('bane')

      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['ok', 'light', 'bane', 'bane', 'bane'])

      healthBar[2].damage('ok')

      expect(healthBar.map(hl => hl.damageType))
        .toEqual(['ok', 'ok', 'ok', 'bane', 'bane'])
    })
  })
})
