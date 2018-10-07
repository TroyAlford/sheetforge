import Resource from './Resource'

describe('models/Resource', () => {
  it('requires name', () => {
    expect(() => Resource.create()).toThrow(/name.*is not a valid identifier/)
  })
})
