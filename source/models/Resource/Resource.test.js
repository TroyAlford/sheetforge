import Resource from './Resource'

describe('models/Resource', () => {
  it('requires displayName', () => {
    expect(() => Resource.create()).toThrow(/displayName.*is not a valid identifier/)
  })
})
