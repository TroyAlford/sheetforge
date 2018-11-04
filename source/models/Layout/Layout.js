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

// RULES
// - Anything INSIDE a section that is NOT a section is 100% width
// - A section which has a colSpan passes it down as `columns` to its children
// - A section with a `list` property assumes component/model name match

// [
//   { type: 'Section', title: 'Descriptors', children: [
//     { type: 'Descriptor', list: true, path: 'descriptors' },
//   ] },
//   { type: 'Section', title: 'Attributes', children: [
//     { type: 'Attribute', list: true, path: 'attributes' },
//     { type: 'HealthBar', path: 'health' },
//   ] },
//   { type: 'Row', children: [
//     { type: 'Column', flex: 1, children: [
//       { type: 'Section', title: 'Traits', children: [
//         { type: 'Trait', list: true, path: 'traits' },
//       ] },
//       { type: 'Section', title: 'Resources', children: [
//         { type: 'Resource', list: true, path: 'resources' },
//       ] },
//     ] },
//     { type: 'Column', flex: 2, title: 'Skills', children: [
//       { type: 'Section', title: 'Skills', children: [
//         { type: 'Skill', list: true, path: 'skills' },
//       ] },
//       { type: 'Section', title: 'Inventory', children: [
//         { type: 'Item', list: true, path: 'items' },
//       ] },
//       { type: 'Section', title: 'Spellbook', children: [
//         { type: 'Spell', list: true, path: 'spells' },
//       ] }
//     ] },
//   ] }
// ]
