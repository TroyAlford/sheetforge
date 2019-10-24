import ICategorizable from './ICategorizable'

const Class = ICategorizable(class {
  constructor(name) {
    this.name = name
  }
})

describe('ICategorizable', () => {
  it('returns [] for categories if no name', () => {
    const model = new Class()
    expect(model.categories).toEqual([])
  })

  it('returns categories if specified', () => {
    expect(new Class('Foo: Bar').categories).toEqual(['Foo'])
    expect(new Class('Foo Bar: Baz').categories).toEqual(['Foo Bar'])
    expect(new Class('Foo: Bar: Baz').categories).toEqual(['Foo', 'Bar'])
  })

  it('dedupes categories', () => {
    expect(new Class('Foo: Foo: Bar').categories).toEqual(['Foo'])
  })

  it('handles odd characters and emojis', () => {
    expect(new Class('😀 !! woo!: lulz').categories).toEqual(['😀 !! woo!'])
  })

  it('extracts uncategorized names', () => {
    const model = new Class('Foo: Bar: Baz   ')
    expect(model.uncategorizedName).toEqual('Baz')
  })

  it('sets uncategorized names', () => {
    const model = new Class('Foo: Bar: Baz')
    model.uncategorizedName = 'Flurb'
    expect(model.name).toEqual('Foo: Bar: Flurb')
  })

  it('handles categorized names', () => {
    const model = new Class('Foo: Bar: Baz')
    expect(model.getCategorizedName('Foo')).toEqual('Bar: Baz')
    expect(model.getCategorizedName('Bar')).toEqual('Foo: Baz')
    expect(model.uncategorizedName).toEqual('Baz')
  })
})
