const freeze = (input) => {
  if (!input || typeof input !== 'object' || input instanceof Date) {
    return input
  }

  const output = Object.entries(input).reduce((o, [key, value]) => {
    if (typeof value === 'object') {
      return Object.assign(o, { [key]: freeze(value) })
    }

    return Object.assign(o, { [key]: value })
  }, Array.isArray(input) ? [] : {})

  return Object.freeze(output)
}

export default freeze
