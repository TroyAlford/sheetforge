export default (array = []) => (
  array.filter((item, index, all) => all.indexOf(item) === index)
)
