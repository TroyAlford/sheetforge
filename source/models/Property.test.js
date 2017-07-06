import Property from './Property'

describe('Property', () => {
  it('requires a key during initialization', () => {
    expect(() => new Property()).toThrowError(/key/)
  })

  it('defaults to 0 if not specified', () => {
    const p = new Property('foo')
    expect(p.defaultValue).toEqual(0)
  })

  it('applies updaters sequentially', () => {
    const updaters = [
      value => value + 3, //  0 =>  3
      value => value * 4, //  3 => 12
      value => value / 2, // 12 =>  6
    ]
    const p = new Property('foo', { updaters })
    expect(p.value).toEqual(6)
  })

  it('notifies subscribers only if calculated value changes', () => {
    const subscriber = jest.fn()
    const subscribers = [subscriber]
    const p = new Property('foo', { subscribers })

    expect(p.value).toEqual(0)
    expect(subscriber).toHaveBeenCalledTimes(1)

    subscriber.mockClear()

    expect(p.value).toEqual(0)
    expect(subscriber).not.toBeCalled()
  })
})
