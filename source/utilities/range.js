export default (start, end) => {
  if (
    typeof start !== 'number' || typeof end !== 'number' ||
    Math.round(start) !== start || Math.round(end) !== end
  ) {
    throw new TypeError('range(start, end) requires integer values for both start and end')
  }

  const step = (start <= end) ? 1 : -1
  const length = Math.floor(Math.abs(end - start) / Math.abs(step)) + 1
  return Array(...Array(length)).map((_, i) => start + (i * step))
}
