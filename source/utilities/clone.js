const clone = (original) => {
  if (Array.isArray(original)) {
    return original.slice().map(clone)
  }
  if (typeof original === 'object') {
    return Object.entries(original).reduce((cloned, [key, value]) => (
      Object.assign(cloned, { [key]: clone(value) })
    ), {})
  }

  return original
}

export default clone
