export default function (object, methods = []) {
  if (!Array.isArray(methods)) return
  methods.forEach((method) => {
    if (typeof method !== 'string') return
    if (typeof object[method] !== 'function') return

    // eslint-disable-next-line no-param-reassign
    object[method] = object[method].bind(object)
  })
}
