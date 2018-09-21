import { types } from 'mobx-state-tree'
import setPathValue from './setPathValue'
import IEditable from '@/models/generic/IEditable'

const DUMMY_DEFAULTS = { bar: 1, baz: ['foo', 'bar'], foo: 'foo' }
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
    child: types.optional(DummyType, DUMMY_DEFAULTS),
    foo: types.optional(types.string, ''),
  })
)

describe('utilities/object/setPathValue()', () => {
  it('sets nested property values on simple objects', () => {
    const object = { parent: { child: { grandchild: 'Frank' } } }

    setPathValue(object, 'parent.child.grandchild', 'Sue')
    expect(object.parent.child.grandchild).toEqual('Sue')

    setPathValue(object, 'parent.child.foo', 'Foo')
    expect(object.parent.child.foo).toEqual('Foo')
  })
  it('sets nested property values with arrays', () => {
    const array = [0, [0, 1, [0, 1, 2]]]

    setPathValue(array, '1.2.3', 'Foo')
    expect(array).toEqual([0, [0, 1, [0, 1, 2, 'Foo']]])

    setPathValue(array, '[1].2[0]', 'Foo')
    expect(array).toEqual([0, [0, 1, ['Foo', 1, 2, 'Foo']]])
  })
  it('sets nested property values with IEditables', () => {
    const dummy = DummyParent.create()

    setPathValue(dummy, 'foo', 'NEW VALUE')
    expect(dummy.foo).toEqual('NEW VALUE')

    setPathValue(dummy, 'child.foo', 'NEW CHILD VALUE')
    expect(dummy.child.foo).toEqual('NEW CHILD VALUE')
  })
})
