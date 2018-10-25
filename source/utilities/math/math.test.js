import math from './math'

describe('utilities/math', () => {
  describe('arithmetic', () => {
    it('can add()', () => {
      expect(math.add(1, 2, 3, 4, 5)).toEqual(15)
      expect(math.add(1, 2, -3, 4, -5)).toEqual(-1)
    })

    it('can divide()', () => {
      expect(math.divide(25, 5)).toEqual(5)
    })

    it('can mod()', () => {
      expect(math.mod(25, 4)).toEqual(1)
    })

    it('can multiply()', () => {
      expect(math.multiply(2, 3, 4)).toEqual(2 * 3 * 4)
    })

    it('can pow()', () => {
      expect(math.pow(4, 2)).toEqual(16)
      expect(math.pow(4, 3)).toEqual(64)
    })

    it('can round()', () => {
      expect(math.round(4.275)).toEqual(4)
      expect(math.round(4.725)).toEqual(5)
      expect(math.round(4.5)).toEqual(5)
      expect(math.round(4.499999999)).toEqual(4)
    })

    it('can subtract()', () => {
      expect(math.subtract(5, 10)).toEqual(-5)
      expect(math.subtract(5, -10)).toEqual(15)
    })
  })

  describe('expressions', () => {
    it('can process +, -, /, *, ^', () => {
      expect(math.eval('1 + 3 + 5')).toEqual(9)
      expect(math.eval('5 - 4 - 9')).toEqual(-8)
      expect(math.eval('16 / 2')).toEqual(8)
      expect(math.eval('12 * 10')).toEqual(120)
      expect(math.eval('4 ^ 2')).toEqual(16)
      expect(math.eval('(4 ^ 3) / 8 * 2 + 4 - 10')).toEqual(10)
    })

    it('can round(), floor(), ceil()', () => {
      expect(math.eval('round(1.5)')).toEqual(2)
      expect(math.eval('round(1.4999999)')).toEqual(1)
      expect(math.eval('round(3 * .25)')).toEqual(1)

      expect(math.eval('ceil(1.5)')).toEqual(2)
      expect(math.eval('ceil(1.4999999)')).toEqual(2)
      expect(math.eval('ceil(3 * .25)')).toEqual(1)

      expect(math.eval('floor(1.5)')).toEqual(1)
      expect(math.eval('floor(1.4999999)')).toEqual(1)
      expect(math.eval('floor(3 * .25)')).toEqual(0)
    })
  })
})
