export default (functions = [], startWith) =>
  functions.reduce((value, fn) => fn(value), startWith)
