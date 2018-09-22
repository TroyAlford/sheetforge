import Trait from './Trait'

describe('models/Trait', () => {
  it('requires displayName', () => {
    expect(() => Trait.create()).toThrow(/displayName.*is not a string/)
  })
})
