export default prop => (objectA, objectB) => {
  const a = objectA instanceof Map ? objectA.get(prop) : objectA[prop]
  const b = objectB instanceof Map ? objectB.get(prop) : objectB[prop]

  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }

  return 0
}
