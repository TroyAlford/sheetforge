const thaw = (input) => {
  if (Array.isArray(input)) {
    return [...input.map(thaw)]
  }
  if (!input || !Object.isFrozen(input) || typeof input !== 'object') {
    return input
  }

  return Object.entries(input).reduce((o, [key, value]) => {
    if (typeof value === 'object') {
      return Object.assign(o, { [key]: thaw(value) })
    }

    return Object.assign(o, { [key]: value })
  }, {})
}

export default thaw
