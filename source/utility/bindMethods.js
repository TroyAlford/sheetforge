export default function(object, methods = []) {
  if (!Array.isArray(methods)) return
  methods.forEach(method => {
    if (typeof method !== 'string') return
    if (typeof object[method] !== 'function') return
    object[method] = object[method].bind(object)
  })
}
