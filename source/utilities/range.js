export default (start, stop) => Array.from(
  new Array((stop - start) + 1),
  (_, i) => i + start
)
