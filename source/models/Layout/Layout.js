import { types } from 'mobx-state-tree'
import CollectionOf from '@/models/generic/Collection'
import IEditable from '@/models/generic/IEditable'
import IIdentity from '@/models/generic/IIdentity'
import between from '@/models/types/between'

const Layout = types.compose(
  IIdentity,
  IEditable,
  types.model({
    categorize: false,
    children: CollectionOf(types.late(() => Layout)),
    colSpan: between(1, 4, 1),
    columns: between(1, 4, 1),
    filter: types.maybe(types.string),
    sortOption: types.maybe(types.number),
    title: types.union(types.maybe(types.string), types.literal(false)),
    type: types.maybe(types.string),
  })
).named('Layout')

export default Layout
