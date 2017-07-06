export default (object, filter) => {
  const hash = {}

  Object.keys(object).forEach((key) => {
    if (filter(object[key])) hash[key] = object[key]
  })

  return hash
}
