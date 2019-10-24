import IIdentity from './IIdentity'
import * as hash from '@/utilities/hash'

const ClassWithStaticID = IIdentity(class {
  id = 'pre-existing'
})
const ClassWithDynamicID = IIdentity(class {
  constructor(id) {
    this.id = id
  }
})
const ClassWithNoID = IIdentity(class { })

describe('IIdentity', () => {
  let $randomHash
  beforeAll(() => {
    $randomHash = hash.randomHash
    hash.randomHash = jest.fn(() => 'abcde')
  })
  afterAll(() => { hash.randomHash = $randomHash })

  it('only generates id if it does not exist', () => {
    const withStaticId = new ClassWithStaticID()
    expect(withStaticId.id).toEqual('pre-existing')

    const withDynamicId = new ClassWithDynamicID('12345')
    expect(withDynamicId.id).toEqual('12345')

    const withNoId = new ClassWithNoID()
    expect(withNoId.id).toEqual('abcde')
  })
})
