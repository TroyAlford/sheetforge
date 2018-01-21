const arrayFn = fn => (arg1, ...args) => {
  if (!args.length && Array.isArray(arg1)) return fn(arg1)
  return fn([arg1, ...args])
}

export const sum = arrayFn(values => values.reduce((all, one) => all + one, 0))
export const average = arrayFn(values => Math.round(sum(...values) / values.length))
