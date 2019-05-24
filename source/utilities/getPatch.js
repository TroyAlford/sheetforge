import unique from '@/utilities/unique'

export const DELETED = Symbol('deleted')
export const NOCHANGE = Symbol('nochange')

const getPatch = (left, right) => {
  if (left === right) return NOCHANGE
  if (left !== undefined && right === undefined) return DELETED

  if (
    (typeof left !== 'object' || right === undefined) ||
    (typeof left !== typeof right) ||
    (Array.isArray(left) !== Array.isArray(right))
  ) {
    return right
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    const array = [...Array(Math.max(left.length, right.length))].map((_, i) => (
      getPatch(left[i], right[i])
    ))
    if (array.every(value => value === NOCHANGE)) return NOCHANGE
    return array
  }

  const keys = unique([...Object.keys(left), ...Object.keys(right)])
  const patchObject = keys.reduce((patch, key) => {
    const keyPatch = getPatch(left[key], right[key])
    if (keyPatch !== NOCHANGE) return { ...patch, [key]: keyPatch }
    return patch
  }, {})
  if (!Object.values(patchObject).length) return NOCHANGE
  return patchObject
}

export default getPatch
