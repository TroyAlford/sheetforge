import { types } from 'mobx-state-tree'
import { randomHash } from '@/utilities/hash'

// eslint-disable-next-line import/prefer-default-export
export const autoHash = types.optional(types.identifier, randomHash)
