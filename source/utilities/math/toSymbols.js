import math from '@/utilities/math/math'

export default (expression) => {
  const fns = []
  const symbols = []

  math.parse(expression).traverse((node) => {
    // console.log(node.type, node)
    if (node.fn) {
      fns.push(node.fn.name)
    }
    // if (node.type === 'AccessorNode') {
    //   let { name } = node
    //   let subNode = node.index
    //   while (subNode) {
    //     name += `.${subNode.dimensions[0].name}`
    //     subNode = subNode.dimensions[0].index
    //   }
    //   symbols.push(name)
    // }
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
