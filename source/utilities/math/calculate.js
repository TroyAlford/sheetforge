import math from 'mathjs'
import toSymbols from '@/utilities/math/toSymbols'
// const math = core.create()
// math.import(require('mathjs/lib/expression'))
// math.import(require('mathjs/lib/function/statistics/mean'))

export default (expression = '', data = {}, options = { defaultSymbolValue: 0 }) => {
  const safeData = { ...data }
  toSymbols(expression).forEach((symbol) => {
    if (safeData[symbol] === undefined) {
      safeData[symbol] = options.defaultSymbolValue
    }
  })

  return math.eval(expression, safeData)
}
