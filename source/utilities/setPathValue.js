import splitObjectPath from '@/utilities/splitObjectPath'

export default (object, path, value) => {
  const split = splitObjectPath(path)
  const property = split.pop()
  const target = split.reduce((o, key) => {
    if (!o[key] || typeof o[key] !== 'object') {
      o[key] = {} // eslint-disable-line no-param-reassign
    }
    return o[key]
  }, object)

  target[property] = value
  return object
}
