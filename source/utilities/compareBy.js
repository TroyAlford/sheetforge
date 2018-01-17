import { isObservableMap } from 'mobx'

export default prop => (objectA, objectB) => {
  const a = isObservableMap(objectA) ? objectA.get(prop) : objectA[prop]
  const b = isObservableMap(objectB) ? objectB.get(prop) : objectB[prop]

  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }

  return 0
}
