import { onSnapshot } from 'mobx-state-tree'
import React from 'react'
import Sortable from 'sortablejs'
import MultiToggle from '@/components/MultiToggle'
import CollectionOf from '@/models/generic/Collection'
import debounce from '@/utilities/debounce'
import noop from '@/utilities/noop'
import unique from '@/utilities/unique'
import './List.scss'

const NO_CATEGORY = 'Uncategorized'

const buildSorter = (getter, reversed = false) => (A, B) => {
  const a = getter(A)
  const b = getter(B)

  if (Array.isArray(a) && Array.isArray(b)) {
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) {
        if (reversed) return b[i] < a[i] ? -1 : 1
        return a[i] < b[i] ? -1 : 1
      }
    }

    return 0
  }

  if (typeof a === 'number' && typeof b === 'number') {
    if (a === b) return 0
    if (reversed) return b < a ? -1 : 1
    return a < b ? -1 : 1
  }

  const aString = String(a)
  const bString = String(b)

  if (reversed) return bString.localeCompare(aString)
  return aString.localeCompare(bString)
}

export default (Model, Component, props = {}) => {
  const sortOptions = (Component.sortOptions || []).map(sorter => ({
    ...sorter,
    comparitor: buildSorter(sorter.getter),
    display: typeof sorter.display === 'string'
      ? <span className={sorter.display} />
      : sorter.display,
  }))

  return class List extends React.Component {
    static defaultProps = {
      className: '',
      collection: CollectionOf(Model).create([]),
      columns: 1,
      layout: undefined,
      sortable: true,
      title: props.title || '',
      ...props,
    }

    Component = Component
    Model = Model

    container = React.createRef()
    expandedItems = {}
    filterEl = React.createRef()
    onDataSnapshotDisposer = noop
    onLayoutSnapshotDisposer = noop
    sortable = null
    state = {
      expanded: {},
      sortOption: null,
    }

    componentDidMount() {
      if (this.props.layout) {
        const { sortOption: sortOptionIndex } = this.props.layout
        if (sortOptions.length && sortOptionIndex !== undefined) {
          this.setState({ sortOption: sortOptions[sortOptionIndex] || null })
        }
        this.onLayoutSnapshotDisposer = onSnapshot(this.props.layout,
          debounce(() => this.forceUpdate(), 100, true)
        )
      }

      const { sortable } = this.props
      if (sortable) {
        this.sortable = Sortable.create(this.container.current, {
          disabled: !sortable,
          draggable: '.list-item-wrapper',
          handle: '.drag-handle',
          onEnd: () => {
            this.container.current.classList.remove('dragging')
            this.props.collection.replace(
              [...this.container.current.querySelectorAll('.list-item-wrapper')]
                .map(item => parseInt(item.getAttribute('data-index'), 10))
                .map(targetIndex => this.props.collection.at(targetIndex))
            )
          },
          onStart: () => this.container.current.classList.add('dragging'),
        })
      }
      this.onDataSnapshotDisposer = onSnapshot(this.props.collection, () => this.forceUpdate())
    }
    componentWillReceiveProps() {
      if (this.sortable) this.sortable.option('disabled', !this.props.sortable)
    }
    componentWillUnmount() {
      if (this.sortable) this.sortable.destroy()
      this.onDataSnapshotDisposer()
      this.onLayoutSnapshotDisposer()
    }

    get categories() {
      const list = this.props.collection.asArray.reduce((all, next) => (
        all.concat(next.categories || [])
      ), [])


      if (!list.length) return []
      return unique(list.filter(item => item !== NO_CATEGORY)).sort().concat(NO_CATEGORY)
    }

    getCategoryItems = (items, category) => (
      (category && category !== NO_CATEGORY)
        ? items.filter(item => (item.categories || []).includes(category))
        : items.filter(item => (item.categories || []).length === 0)
    )

    handleAdd = () => {
      this.props.collection.push(Model.create({}))
      this.forceUpdate()
    }
    handleDelete = ({ target }) => {
      const index = parseInt(target.parentNode.getAttribute('data-index'), 10)
      this.props.collection.deleteAt(index)
      this.forceUpdate()
    }
    handleFilterChange = ({ target }) => this.props.layout.set({ filter: target.value })
    handleSort = () => this.props.collection.sortBy('name')
    handleSortChange = (clicked) => {
      const { sortOption: current } = this.state
      this.setState({ sortOption: current === clicked ? null : clicked }, () => {
        this.props.layout.set({
          sortOption: current === clicked ? undefined : sortOptions.indexOf(clicked),
        })
      })
    }
    handleToggleCategorized = () => {
      this.props.layout.set({ categorize: !this.props.layout.categorize })
    }
    handleToggleExpanded = (hash, expanded) => {
      this.setState(state => ({
        ...state,
        expanded: { ...state.expanded, [hash]: expanded },
      }))
    }

    renderCategoryWidget = () => {
      const { layout } = this.props
      const { categories } = this
      if (!categories.length) return null

      const className = [
        'categorize icon-categorize',
        layout.categorize ? 'on' : 'off',
      ].join(' ')

      return <>
        <div {...{ className }} onClick={this.handleToggleCategorized} />
        <select
          className="filter"
          onChange={this.handleFilterChange}
          ref={this.filterEl}
          tabIndex={-1}
          value={layout.filter}
        >
          <option value="">All</option>
          {categories.map(name => <option key={name} value={name}>{name}</option>)}
        </select>
      </>
    }
    renderSortWidget = () => {
      if (!this.props.sortable) return null
      if (!sortOptions.length) return null

      return (
        <MultiToggle
          className="sorter"
          onChange={this.handleSortChange}
          options={sortOptions}
          selected={this.state.sortOption}
        />
      )
    }
    renderCategory = (category, data) => {
      const { columns } = this.props
      const categoryItems = this.getCategoryItems(data, category)
      if (!categoryItems.length) return null

      const values = categoryItems.map(item => item.categoryValue)
      const min = Math.min(...values)
      const max = Math.max(...values)

      return (
        <div key={category} className="category">
          <div className="details">
            <div className="title">Category: {category} ({categoryItems.length})</div>
            {(!Number.isNaN(min) && !Number.isNaN(max)) && (
              <div className="range">{min}-{max}</div>
            )}
          </div>
          <div className="category-items" style={{ columns }}>
            {categoryItems.map(this.renderItem)}
          </div>
        </div>
      )
    }
    renderItem = (model) => {
      const { collection, layout, sortable } = this.props
      const { expanded, sortOption } = this.state
      const sorted = sortable && sortOption !== null
      const categorized = layout && layout.categorize

      return (
        <div
          className={`list-item-wrapper ${expanded[model.hash] ? 'expanded' : ''}`.trim()}
          data-index={collection.indexOf(model)}
          key={model.hash}
        >
          {(!sorted && !categorized) && <div className="drag-handle" />}
          <Component
            model={model}
            onDelete={collection.delete}
            onToggleExpanded={this.handleToggleExpanded}
          />
          <button className="icon-remove" onClick={this.handleDelete} />
        </div>
      )
    }

    render() {
      const { className = '', columns, layout = {}, title } = this.props
      const { sortOption } = this.state
      let { categories } = this
      let data = this.props.collection.asArray
      if (sortOption !== null) data = data.sort(sortOption.comparitor)

      const hasCategories = Boolean(categories.length)
      if (hasCategories && layout.filter) {
        data = this.getCategoryItems(data, layout.filter)
        categories = [layout.filter]
      }
      const listStyle = {
        columns: layout.categorize ? 1 : columns,
      }

      return (
        <div className={`list ${className}`.trim()} ref={this.container} style={listStyle}>
          <div className="title-bar">
            {this.renderSortWidget()}
            {this.renderCategoryWidget()}
            <div className="text">{title}</div>
            <button className="add icon-add" onClick={this.handleAdd} />
          </div>
          {(hasCategories && layout.categorize)
            ? categories.map(category => this.renderCategory(category, data))
            : data.map(this.renderItem)
          }
        </div>
      )
    }
  }
}
