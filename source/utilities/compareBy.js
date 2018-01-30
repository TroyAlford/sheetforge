export default prop => (objectA, objectB) => {
  const a = (objectA instanceof Map ? objectA.get(prop) : objectA[prop]).toString()
  const b = (objectB instanceof Map ? objectB.get(prop) : objectB[prop]).toString()

  return a.localeCompare(b)
}
