import { getParent, hasParent } from 'mobx-state-tree'

export default (child, filterFunction = Boolean) => {
  if (!hasParent(child)) { return null }

  let parent = getParent(child)
  while (parent) {
    if (filterFunction(parent)) {
      return parent
    }

    if (!hasParent(parent)) { return null }
    parent = getParent(parent)
  }

  return null
}
