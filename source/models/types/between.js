import { types } from 'mobx-state-tree'

export default (min, max, defaultTo = min) => (
  types.optional(
    types.refinement(
      types.number,
      n => n === undefined || (n >= min && n <= max)
    ),
    defaultTo
  )
)
