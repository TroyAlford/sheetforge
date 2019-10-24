import EventSource from '@/models/generic/EventSource'
import flatten from '@/utilities/flatten'
import calculate from '@/utilities/math/calculate'
import toSymbols from '@/utilities/math/toSymbols'
import unique from '@/utilities/unique'

export default class Computor extends EventSource {
  DEPENDENCIES = {}
  FORMULAS = {}
  INDEX = {}

  constructor(index = {}) {
    super()
    this.INDEX = index
  }

  circular = (symbol, formula, symbols = new Set()) => {
    if (typeof formula !== 'string') return false

    const $symbol = this.key(symbol).split('$').shift()
    if (symbols.has($symbol)) return true

    symbols.add($symbol)
    const formulas = toSymbols(formula).map(s => this.formulaFor(s))

    if (formulas.some(f => symbols.has(f.symbol))) return true

    return formulas.some(s => this.circular(s.symbol, s.formula, symbols))
  }

  chain = new Map()
  compute = (symbol, formula, defaultValue) => {
    const key = this.key(symbol)
    const $symbol = key.split('$').shift()
    const circular = this.circular(symbol, formula)
    if (this.chain.has(key)) return this.chain.get(key)
    this.event('circular', symbol)
    this.chain.set(key, defaultValue)

    let dependsOn = []
    let value = formula

    if (typeof formula === 'string') {
      dependsOn = toSymbols(formula)

      if (circular) {
        value = undefined
      } else {
        const values = {}

        let canCalculate = true
        dependsOn.forEach((dependency) => {
          const resolved = this.resolve(dependency)
          if (resolved !== undefined) {
            values[dependency] = this.resolve(dependency)
          } else {
            canCalculate = false
          }
        })

        value = canCalculate ? calculate(formula, values) : undefined
      }
    }

    this.FORMULAS[key] = { circular, defaultValue, dependsOn, formula, value }
    this.event('compute', key, formula)

    const formulas = Object.entries(this.FORMULAS)
    this.DEPENDENCIES[$symbol] = unique(flatten(formulas.map(
      ([k, v]) => (this.matchKey(k, $symbol) ? v.dependsOn : [])
    ))).sort()

    formulas.filter(([, v]) => v.dependsOn.find(d => this.matchKey(d, $symbol)))
      .forEach(([k, v]) => {
        this.compute(k, v.formula, v.defaultValue)
        this.event('dependency', k, key)
      })

    this.chain.delete(key)
    return circular ? defaultValue : value
  }
  formulaFor = (symbol) => {
    const key = this.key(symbol)
    const resolvedKey = Object.keys(this.FORMULAS).filter(k => k.startsWith(key)).sort().shift()
    return { symbol: resolvedKey || key, ...(this.FORMULAS[resolvedKey] || {}) }
  }
  key = (symbol, indices = []) => {
    let key = this.symbolize(symbol)
    let tail = indices

    const split = symbol.split('$')
    if (split.length > 1) {
      // If the symbol is complex, like `FIT$value$skills`, extract its indices & convert them
      key = this.key(this.symbolize(split.shift()))
      tail = split.concat(indices)
    }

    return [key, ...tail.map(i => (this.INDEX[i] !== undefined ? this.INDEX[i] : i))].join('$')
  }
  matchKey = (key, symbol) => Boolean(new RegExp(`${symbol}([$]|$)`).test(key))
  resolve = (symbol) => {
    const formula = this.formulaFor(symbol)
    // return the value if it exists, or `undefined` if not
    if (formula.circular || formula.value === undefined) return formula.defaultValue
    return formula.value
  }
  symbolize = string => string.toLowerCase().replace(/[^a-z0-9$]/g, '_')
}
