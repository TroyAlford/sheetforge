import splitObjectPath from './splitObjectPath'

export default (object, path) => {
  const split = splitObjectPath(path)
  const property = split.pop()
  const target = split.reduce((o, key) => o[key] || {}, object)

  if (target) return target[property]
  return undefined
}
