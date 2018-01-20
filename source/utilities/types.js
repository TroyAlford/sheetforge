import { types } from 'mobx-state-tree'
import { randomHash } from './hash'

export const autoHash = types.optional(types.identifier(types.string), randomHash())
