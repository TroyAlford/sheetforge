import math from '@/utilities/math/math'

export default (expression) => {
  const fns = []
  const symbols = []

  math.parse(expression).traverse((node) => {
    if (node.fn) {
      fns.push(node.fn.name)
    }
    if (
      node.type === 'SymbolNode'
      && !symbols.includes(node.name)
      && !fns.includes(node.name)
    ) {
      symbols.push(node.name)
    }
  })
  return symbols
}
