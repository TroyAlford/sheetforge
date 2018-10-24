import math from 'mathjs'

export default (expression) => {
  const symbols = []
  math.parse(expression).traverse((node) => {
    if (node.type === 'SymbolNode' && !symbols.includes(node.name)) {
      symbols.push(node.name)
    }
  })
  return symbols
}
