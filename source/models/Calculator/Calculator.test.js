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

  describe('set', () => {
    it('sets keys with no indices', () => {
      calculator.set('foo', 5)
      calculator.set('bar', 10)
      expect(calculator.RESOLVED).toMatchObject({ bar: 10, foo: 5 })
    })
    it('sets keys with indices', () => {
      calculator.set('foo', 5, ['skills'])
      calculator.set('foo', 10, ['skills', 'theory'])
      calculator.set('foo', 15, ['attributes', 'value'])
      expect(calculator.RESOLVED).toMatchObject({ foo$0$0: 15, foo$1: 5, foo$1$1: 10 })
    })
  })

  describe('resolve', () => {
    it('resolves simple symbols', () => {
      calculator.set('foo', 5)
      calculator.set('bar', 7)
      expect(calculator.resolve('foo')).toEqual(5)
      expect(calculator.resolve('bar')).toEqual(7)
    })
    it('resolves non-exact symbols in priority order', () => {
      calculator.set('foo', 0)
      calculator.set('foo', 5, ['attributes', 'value'])
      calculator.set('foo', 12, ['skills', 'theory'])
      calculator.set('foo', 10, ['skills', 'mastery'])
      calculator.set('foo', 15, ['attributes'])
      expect(calculator.resolve('foo')).toEqual(0) // matches least-specific 'foo'
      expect(calculator.resolve('foo', ['skills'])).toEqual(10) // matches on 'mastery': lower index
      expect(calculator.resolve('foo', ['skills', 'theory'])).toEqual(12) // matches on 'theory': exact
      expect(calculator.resolve('foo', ['attributes'])).toEqual(15) // matches most general
      expect(calculator.resolve('foo', ['attributes', 'value'])).toEqual(5) // matches exact
    })
  })

  describe('compute', () => {
    it('resolves formulas with no symbols', () => {
      expect(calculator.compute('foo', '4 + 5')).toEqual(9)
    })
    it('resolves formulas with exactly matching symbols', () => {
      calculator.set('bar', 4)
      calculator.set('baz', 5)
      expect(calculator.compute('foo', 'bar + baz')).toEqual(9)
    })
    it('resolves formulas with non-exact symbols', () => {
      calculator.set('STR', 3, ['attributes'])
      calculator.set('AGI', 5, ['attributes'])
      calculator.set('FIT', 4, ['attributes'])
      calculator.set('FIT', 7, ['skills'])
      calculator.set('Sword & Board', 3, ['mastery', 'skills'])
      calculator.set('Sword & Board', 2, ['theory', 'skills'])

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
})
