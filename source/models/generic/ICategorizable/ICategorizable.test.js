import { types } from 'mobx-state-tree'
import ICategorizable from '@/models/generic/ICategorizable'

const Categorizable = types.compose(
  ICategorizable(),
  types.model({ name: '' })
)

describe('models/generic/ICategorizable', () => {
  it('returns [] for categories if no name', () => {
    const model = Categorizable.create({})
    expect(model.categories).toEqual([])
  })

  it('returns categories if specified', () => {
    expect(Categorizable.create({ name: 'Foo: Bar' }).categories).toEqual(['Foo'])
    expect(Categorizable.create({ name: 'Foo Bar: Baz' }).categories).toEqual(['Foo Bar'])
    expect(Categorizable.create({ name: 'Foo: Bar: Baz' }).categories).toEqual(['Bar', 'Foo'])
  })

  it('handles odd characters and emojis', () => {
    expect(Categorizable.create({ name: '😀 !! woo!: lulz' }).categories).toEqual(['😀 !! woo!'])
  })
})
