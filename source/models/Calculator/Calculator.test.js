import Calculator from './Calculator'

describe('Calculator', () => {
  let calculator

  beforeEach(() => {
    /* eslint-disable object-property-newline,sort-keys */
    calculator = new Calculator({
      attributes: 0, skills: 1, resources: 2, effects: 3,
      value: 0, mastery: 0, maximum: 0, theory: 1,
    })
    /* eslint-enable object-property-newline,sort-keys */
  })

  describe('resolve', () => {
    it('resolves simple symbols', () => {
      calculator.compute('foo', 5)
      calculator.compute('bar', 7)
      expect(calculator.resolve('foo')).toEqual(5)
      expect(calculator.resolve('bar')).toEqual(7)
    })
    it('resolves non-exact symbols in priority order', () => {
      calculator.compute('foo', 0)
      calculator.compute('foo$attributes$value', 5)
      calculator.compute('foo$skills$theory', 12)
      calculator.compute('foo$skills$mastery', 10)
      calculator.compute('foo$attributes', 15)
      expect(calculator.resolve('foo')).toEqual(0) // matches least-specific 'foo'
      expect(calculator.resolve('foo$skills')).toEqual(10) // matches on 'mastery': lower index
      expect(calculator.resolve('foo$skills$theory')).toEqual(12) // matches on 'theory': exact
      expect(calculator.resolve('foo$attributes')).toEqual(15) // matches most general
      expect(calculator.resolve('foo$attributes$value')).toEqual(5) // matches exact
    })
  })

  describe('compute', () => {
    it('sets keys with no indices', () => {
      calculator.compute('foo', 5)
      calculator.compute('bar', 10)
      expect(calculator.FORMULAS.foo).toMatchObject({ dependsOn: [], formula: 5, value: 5 })
      expect(calculator.FORMULAS.bar).toMatchObject({ dependsOn: [], formula: 10, value: 10 })
    })
    it('sets keys with indices', () => {
      calculator.compute('foo', 1)
      calculator.compute('foo$skills', 5)
      calculator.compute('foo$skills$theory', 10)
      calculator.compute('foo$attributes$value', 15)

      expect(calculator.FORMULAS.foo).toMatchObject({ value: 1 })
      expect(calculator.FORMULAS.foo$1).toMatchObject({ value: 5 })
      expect(calculator.FORMULAS.foo$1$1).toMatchObject({ value: 10 })
      expect(calculator.FORMULAS.foo$0$0).toMatchObject({ value: 15 })
    })
    it('resolves formulas with no symbols', () => {
      expect(calculator.compute('foo', '4 + 5')).toEqual(9)
    })
    it('resolves formulas with exactly matching symbols', () => {
      calculator.compute('bar', 4)
      calculator.compute('baz', 5)
      expect(calculator.compute('foo', 'bar + baz')).toEqual(9)
    })
    it('resolves formulas with non-exact symbols', () => {
      calculator.compute('STR$attributes', 3)
      calculator.compute('AGI$attributes', 5)
      calculator.compute('FIT$attributes', 4)
      calculator.compute('FIT$skills', 7)
      calculator.compute('Sword & Board$mastery$skills', 3)
      calculator.compute('Sword & Board$theory$skills', 2)

      expect(calculator.compute('BODY', 'mean(STR, AGI, FIT)')).toEqual(4)
      expect(calculator.compute('foo', 'mean(STR, AGI, FIT$skills)')).toEqual(5)
    })
    it('returns undefined when any symbol is not matched', () => {
      expect(calculator.compute('foo', 'unknown + 4')).toEqual(undefined)
    })
  })

  describe('symbolize', () => {
    it('converts text to clean symbols', () => {
      expect(calculator.symbolize('Foo: Bar')).toEqual('foo__bar')
      expect(calculator.symbolize('Sword & Board')).toEqual('sword___board')
    })
  })

  describe('dependency tracking', () => {
    it('tracks formula dependencies', () => {
      calculator.compute('foo', '4 + 5')
      expect([...calculator.DEPENDENCIES.foo]).toEqual([])

      calculator.compute('foo', 'bar + baz')
      expect([...calculator.DEPENDENCIES.foo]).toEqual(['bar', 'baz'])

      calculator.compute('foo$attributes', 'quux + baz')
      expect([...calculator.DEPENDENCIES.foo]).toEqual(['bar', 'baz', 'quux'])

      calculator.compute('foo$attributes$value', 'quux$1 + baz$0$1')
      expect([...calculator.DEPENDENCIES.foo]).toEqual(['bar', 'baz', 'baz$0$1', 'quux', 'quux$1'])
    })
    it('updates formula values when dependencies change, & raises event', () => {
      const onCompute = jest.fn()
      const onDependency = jest.fn()
      calculator.compute('foo', 2)
      calculator.compute('bar', 3)
      calculator.compute('baz', 'foo + bar')
      calculator.compute('quux', 'foo * baz')
      expect(calculator.resolve('baz')).toEqual(5)
      expect(calculator.resolve('quux')).toEqual(10)

      calculator.on('compute', onCompute)
      calculator.on('dependency', onDependency)
      calculator.compute('foo', 7)

      expect(calculator.resolve('baz')).toEqual(10)
      expect(calculator.resolve('quux')).toEqual(70)

      expect(onCompute.mock.calls.map(c => c[0])).toEqual(['foo', 'baz', 'quux', 'quux'])
      expect(onCompute).toHaveBeenCalledWith('foo', 7)
      expect(onCompute).toHaveBeenCalledWith('baz', 'foo + bar')
      expect(onCompute).toHaveBeenCalledWith('quux', 'foo * baz')

      expect(onDependency.mock.calls.map(c => c[0])).toEqual(['quux', 'baz', 'quux'])
      expect(onDependency).toHaveBeenCalledWith('quux', 'baz')
      expect(onDependency).toHaveBeenCalledWith('baz', 'foo')
      expect(onDependency).toHaveBeenCalledWith('quux', 'foo')
    })
    it('switches dependencies, when necessary', () => {
      calculator.compute('foo$initial', 2)
      expect(calculator.compute('bar', 'foo * 3')).toEqual(6)

      calculator.compute('foo', 5)
      expect(calculator.resolve('bar')).toEqual(15)
      expect(calculator.resolve('foo')).toEqual(5)
      expect(calculator.resolve('foo$initial')).toEqual(2)
    })
    it('handles circular dependencies gracefully', () => {
      const onCircular = jest.fn()
      const onDependency = jest.fn()
      calculator.on('circular', onCircular)
      calculator.on('dependency', onDependency)

      calculator.compute('foo', '2 * bar')
      expect(calculator.FORMULAS.foo.circular).toBe(false) // not circular yet
      expect(calculator.resolve('foo')).toEqual(undefined)

      calculator.compute('bar', '2 * foo')
      expect(calculator.FORMULAS.bar.circular).toBe(true)
      expect(calculator.FORMULAS.foo.circular).toBe(true) // updated circularity
      expect(calculator.resolve('bar')).toEqual(undefined)
      expect(onCircular).toHaveBeenCalledWith('bar')
      expect(onDependency).not.toHaveBeenCalledWith('foo') // bar didn't resolve

      onCircular.mockReset()
      onDependency.mockReset()

      calculator.compute('foo', '3 * bar', 3)
      expect(onCircular).toHaveBeenCalledTimes(2)
      expect(onCircular).toHaveBeenCalledWith('foo')
      expect(onCircular).toHaveBeenCalledWith('bar')
      expect(onDependency).toHaveBeenCalledTimes(2)
      expect(onDependency).toHaveBeenCalledWith('foo', 'bar')
      expect(onDependency).toHaveBeenCalledWith('bar', 'foo')
      expect(calculator.resolve('foo')).toEqual(3) // foo.default
      expect(calculator.resolve('bar')).toEqual(undefined) // no default value

      calculator.compute('bar', '2 * foo', 4)
      expect(calculator.resolve('bar')).toEqual(4) // bar.default
      expect(calculator.resolve('foo')).toEqual(3) // foo.default

      onCircular.mockReset()
      onDependency.mockReset()

      calculator.compute('bar', 9)
      expect(calculator.FORMULAS.bar.circular).toBe(false) // updated circularity
      expect(calculator.FORMULAS.foo.circular).toBe(false) // updated circularity
      expect(calculator.resolve('bar')).toEqual(9) // bar = 9
      expect(calculator.resolve('foo')).toEqual(27) // foo = bar * 3
    })
  })

  describe('circular', () => {
    it('can find circular dependencies', () => {
      expect(calculator.circular('foo', 'foo + bar')).toEqual(true)

      calculator.compute('foo', 'bar * 2')
      expect(calculator.circular('bar', 'foo * 2')).toEqual(true)

      calculator.compute('bar', 'baz * 2')
      expect(calculator.circular('baz', 'foo * 2')).toEqual(true)
    })
  })
})
