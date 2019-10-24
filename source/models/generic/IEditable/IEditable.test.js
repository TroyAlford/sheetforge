import $Base from './$Base'

describe('models/$Base', () => {
  let model
  beforeEach(() => {
    model = new $Base({ foo: 'bar' })
  })

  it('stores data by value, not by ref', () => {
    expect(model.current).not.toBe(model.saved)
    expect(model.current).toEqual(model.saved)
  })

  it('reports dirtiness correctly', () => {
    expect(model.isDirty).toBe(false)
    expect(model.isPathDirty('foo')).toBe(false)
    expect(model.isPathDirty('baz')).toBe(false)

    model.saved.foo = 'FOO!'
    expect(model.isDirty).toBe(true)
    expect(model.isPathDirty('foo')).toBe(true)
    expect(model.isPathDirty('baz')).toBe(false)

    model.saved.foo = 'bar'
    model.saved.baz = 'quux'
    expect(model.isDirty).toBe(true)
    expect(model.isPathDirty('foo')).toBe(false)
    expect(model.isPathDirty('baz')).toBe(true)
  })

  it('sets multiple values from object input', () => {
    expect(model.current).toEqual({ foo: 'bar' })

    model.set({ baz: 'quux' })
    expect(model.current).toEqual({ baz: 'quux', foo: 'bar' })
    expect(model.saved).toEqual({ foo: 'bar' })

    model.set({ bar: '!!', baz: { 4: 5, 6: 7 }, foo: [1, 2, 3] })
    expect(model.current).toEqual({ bar: '!!', baz: { 4: 5, 6: 7 }, foo: [1, 2, 3] })
    expect(model.saved).toEqual({ foo: 'bar' })
  })

  it('sets values from path input', () => {
    expect(model.current).toEqual({ foo: 'bar' })

    model.set('foo.bar.baz', 'quux')
    expect(model.current).toEqual({ foo: { bar: { baz: 'quux' } } })
    expect(model.saved).toEqual({ foo: 'bar' })

    model.set('foo.bar', { boop: 'beep', quux: 'baz' })
    expect(model.current).toEqual({ foo: { bar: { boop: 'beep', quux: 'baz' } } })
    expect(model.saved).toEqual({ foo: 'bar' })
  })

  it('commitChanges overrides saved with current', () => {
    expect(model.isDirty).toBe(false)

    model.current.foo = 'changed'
    expect(model.isDirty).toBe(true)

    model.commitChanges()

    expect(model.isDirty).toBe(false)
    expect(model.current).not.toBe(model.saved)
    expect(model.current).toEqual(model.saved)
    expect(model.saved.foo).toEqual('changed')
  })

  it('resetChanges overrides current with saved', () => {
    expect(model.isDirty).toBe(false)

    model.current.foo = 'changed'
    expect(model.isDirty).toBe(true)

    model.resetChanges()

    expect(model.isDirty).toBe(false)
    expect(model.current).not.toBe(model.saved)
    expect(model.current).toEqual(model.saved)
    expect(model.saved.foo).toEqual('bar')
  })

  it('reports changes', () => {
    const INITIAL = { foo: 'bar' }
    const onChange = jest.fn()

    model.onChange(onChange)
    expect(onChange).not.toHaveBeenCalled()

    model.set('foo.bar', 'baz')
    const AFTER_FIRST = { foo: { bar: 'baz' } }
    expect(onChange).toHaveBeenLastCalledWith(AFTER_FIRST, INITIAL, model)

    model.commitChanges()
    expect(onChange).toHaveBeenLastCalledWith(AFTER_FIRST, AFTER_FIRST, model)

    model.set({ bar: 'baz' })
    const AFTER_SECOND = { bar: 'baz', foo: { bar: 'baz' } }
    expect(onChange).toHaveBeenLastCalledWith(AFTER_SECOND, AFTER_FIRST, model)

    model.resetChanges()
    expect(onChange).toHaveBeenLastCalledWith(AFTER_FIRST, AFTER_FIRST, model)
  })
})
