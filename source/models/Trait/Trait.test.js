import Trait from './Trait'

describe('models/Trait', () => {
  it('requires name', () => {
    expect(() => Trait.create()).toThrow(/name.*is not a string/)
  })
})
