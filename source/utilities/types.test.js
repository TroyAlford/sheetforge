import { types } from 'mobx-state-tree'
import { autoHash } from '@/utilities/types'

it('automatically creates hash values', () => {
  const Model = types.model({ id: autoHash })
  const model = Model.create({})

  expect(typeof model.id).toBe('string')
  expect(model.id).toMatch(/^[a-f0-9]{7,8}$/)
})
