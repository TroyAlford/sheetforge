import { randomHash } from '@/utilities/hash'

export default BaseClass => (
  BaseClass.IIdentity ? BaseClass : class extends BaseClass {
    static IIdentity = true
    id = this.id || randomHash()
  }
)
