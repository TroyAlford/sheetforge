import math from '@/utilities/math'
import toSymbols from '@/utilities/math/toSymbols'

export default (expression = '', data = {}, options = { defaultSymbolValue: 0 }) => {
  const safeData = { ...data }
  toSymbols(expression).forEach((symbol) => {
    if (safeData[symbol] === undefined) {
      safeData[symbol] = options.defaultSymbolValue
    }
  })

  return math.eval(expression, safeData)
}
