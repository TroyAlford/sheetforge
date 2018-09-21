import { getParent, hasParent } from 'mobx-state-tree'
import noop from '@/utilities/noop'

export default (child, filterFunction = noop) => {
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
