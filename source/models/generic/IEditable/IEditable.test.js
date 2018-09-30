import { types } from 'mobx-state-tree'
import IEditable from './IEditable'

const DummyType = types.compose(
  IEditable,
  types.model('Dummy', {
    bar: types.number,
    baz: types.optional(types.array(types.string), []),
    foo: types.string,
  })
)
const DummyParent = types.compose(
  IEditable,
  types.model('DummyParent', {
    child: DummyType,
  })
)

const DEFAULTS = { bar: 1, baz: ['foo', 'bar'], foo: 'foo' }

describe('models/IEditable', () => {
  let dummy
  let dummyParent

  beforeEach(() => {
    dummy = DummyType.create(DEFAULTS)
    dummyParent = DummyParent.create({ child: dummy })
  })

  it('copies initial values upon creation', () => {
    expect(dummy.savedVersion).toEqual(dummy.toJSON())
  })
  it('allows setting values by path', () => {
    expect(dummyParent.child.foo).toEqual(DEFAULTS.foo)
    expect(dummyParent.child.baz[0]).toEqual(DEFAULTS.baz[0])

    dummyParent.set('child.foo', 'bar')
    expect(dummyParent.child.foo).toEqual('bar')
    expect(dummyParent.savedVersion.child.foo).toEqual('foo')
    expect(dummyParent.child.savedVersion.foo).toEqual('foo')

    dummyParent.set('child.baz[0]', 'yum')
    expect(dummyParent.child.baz[0]).toEqual('yum')
    expect(dummyParent.child.savedVersion.baz[0]).toEqual(DEFAULTS.baz[0])
    expect(dummyParent.savedVersion.child.baz[0]).toEqual(DEFAULTS.baz[0])
  })
  it('correctly identifies dirtiness', () => {
    expect(dummyParent.child.foo).toEqual(DEFAULTS.foo)
    expect(dummyParent.child.baz[0]).toEqual(DEFAULTS.baz[0])

    expect(dummyParent.isDirty).toBe(false)
    expect(dummyParent.child.isDirty).toBe(false)
    expect(dummyParent.isPathDirty('child.foo')).toBe(false)
    expect(dummyParent.isPathDirty('child.bar')).toBe(false)
    expect(dummyParent.isPathDirty('child.baz')).toBe(false)
    expect(dummyParent.isPathDirty('child.baz[0]')).toBe(false)

    dummyParent.set('child.foo', 'bar')
    dummyParent.set('child.baz[0]', 'yum')

    expect(dummyParent.isDirty).toBe(true)
    expect(dummyParent.child.isDirty).toBe(true)
    expect(dummyParent.isPathDirty('child.foo')).toBe(true)
    expect(dummyParent.isPathDirty('child.bar')).toBe(false) // hasn't changed
    expect(dummyParent.isPathDirty('child.baz')).toBe(true)
    expect(dummyParent.isPathDirty('child.baz[0]')).toBe(true)
  })
  it('markAsClean() resets savedVersion', () => {
    dummy.set('foo', 'bar')
    expect(dummy.isDirty).toBe(true)

    dummy.markAsClean()
    expect(dummy.isDirty).toBe(false)
    expect(dummy.foo).toBe('bar')
    expect(dummy.savedVersion.foo).toBe('bar')
  })
  it('reset() resets values to the savedVersion', () => {
    dummy.set('foo', 'bar')
    expect(dummy.isDirty).toBe(true)

    dummy.reset()
    expect(dummy.isDirty).toBe(false)
    expect(dummy.foo).toBe(DEFAULTS.foo)
    expect(dummy.savedVersion.foo).toBe(DEFAULTS.foo)
  })
})
