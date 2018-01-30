export default (prop, reversed = false) => (objectA, objectB) => {
  const a = (objectA instanceof Map ? objectA.get(prop) : objectA[prop]).toString()
  const b = (objectB instanceof Map ? objectB.get(prop) : objectB[prop]).toString()

  if (reversed) return b.localeCompare(a)
  return a.localeCompare(b)
}
