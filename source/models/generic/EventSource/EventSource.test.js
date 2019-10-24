import EventSource from './EventSource'

describe('EventSource', () => {
  it('allows subscribe/unsubscribe', () => {
    const model = new EventSource()
    const fn = jest.fn()
    const unsubscribe = model.on('foo', fn)

    model.event('foo', 1, 2, 3)
    expect(fn).toHaveBeenLastCalledWith(1, 2, 3)

    model.event('foo', 4, 5, 6)
    expect(fn).toHaveBeenLastCalledWith(4, 5, 6)

    fn.mockReset()
    unsubscribe()

    model.event('foo', 7, 8, 9)
    expect(fn).not.toHaveBeenCalled()
  })

  it('allows multiple subscriptions', () => {
    const model = new EventSource()
    const fn1 = jest.fn()
    const fn2 = jest.fn()

    model.on('foo', fn1)
    model.on('foo', fn2)
    model.event('foo', 1)

    expect(fn1).toHaveBeenLastCalledWith(1)
    expect(fn2).toHaveBeenLastCalledWith(1)
  })

  it('allows/removes duplicate subscriptions', () => {
    const model = new EventSource()
    const fn = jest.fn()

    const unsubscribe = model.on('foo', fn)
    model.on('foo', fn) // duplicate subscription
    model.event('foo', 1)

    expect(fn).toHaveBeenCalledTimes(2)

    fn.mockReset()
    unsubscribe() // Should remove both subscriptions
    expect(fn).not.toHaveBeenCalled()

    model.on('foo', 1)
    expect(fn).not.toHaveBeenCalled() // No further call
  })
})
