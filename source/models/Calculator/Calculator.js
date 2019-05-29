import calculate from '@/utilities/math/calculate'
import toSymbols from '@/utilities/math/toSymbols'

export default class Computor {
  INDEX = {}
  RESOLVED = {}

  constructor(index = {}) {
    this.INDEX = index
  }

  compute = (key, formula) => {
    const symbols = toSymbols(formula)
    const payload = {}

    let canCalculate = true
    symbols.forEach((symbol) => {
      const resolved = this.resolve(symbol)
      if (resolved !== undefined) {
        payload[symbol] = this.resolve(symbol)
      } else {
        canCalculate = false
      }
    })

    if (canCalculate) {
      return calculate(formula, payload)
    }

    return undefined
  }

  key = (symbol, indices = []) => {
    const cleanSymbol = this.symbolize(symbol)
    return [cleanSymbol, ...indices.map(i => (this.INDEX[i] !== undefined ? this.INDEX[i] : i))].join('$')
  }
  resolve = (symbol, indices = []) => {
    const split = symbol.split('$')
    let key
    if (split.length > 1) {
      // If the symbol is complex, like `FIT$value$skills`, extract its indices & convert them
      key = this.key(split.shift(), split.concat(indices))
    } else {
      // If the symbol is simple, just use it and its indices directly
      key = this.key(symbol, indices)
    }

    const resolvedKey = Object.keys(this.RESOLVED).filter(k => k.startsWith(key)).sort().shift()
    return this.RESOLVED[resolvedKey]
  }
  set = (symbol, value, indices = []) => {
    const key = this.key(symbol, indices)
    this.RESOLVED[key] = value
  }
  symbolize = name => name.toLowerCase().replace(/[^a-z0-9]/g, '_')
}
