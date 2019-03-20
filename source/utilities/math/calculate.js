import math from '@/utilities/math'
import toSymbols from '@/utilities/math/toSymbols'

export default (expression = '', data = {}, options = { defaultSymbolValue: 0 }) => {
  const safeData = { ...data }
  toSymbols(expression).forEach((symbol) => {
    if (typeof safeData[symbol] !== 'number' || Number.isNaN(safeData[symbol])) {
      safeData[symbol] = options.defaultSymbolValue
    }
  })

  return math.eval(expression, safeData)
}
