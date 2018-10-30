import { onSnapshot } from 'mobx-state-tree'
import React from 'react'
import Sortable from 'sortablejs'
import MultiToggle from '@/components/MultiToggle'
import CollectionOf from '@/models/generic/Collection'
import noop from '@/utilities/noop'
import './List.scss'

const buildSorter = (getter, reversed = false) => (A, B) => {
  const a = String(getter(A))
  const b = String(getter(B))

  if (reversed) return b.localeCompare(a)
  return a.localeCompare(b)
}

export default (Model, Component, props = {}) => {
  const sortOptions = [
    Component.getSortableName && {
      display: <span className="icon-sort-name-asc" />,
      sorter: buildSorter(Component.getSortableName),
    },
    Component.getSortableValue && {
      display: <span className="icon-sort-value-asc" />,
      sorter: buildSorter(Component.getSortableValue),
    },
  ].filter(Boolean)

  return class List extends React.Component {
    static defaultProps = {
      className: '',
      collection: CollectionOf(Model).create([]),
      columns: 1,
      sortable: true,
      title: props.title || '',
      ...props,
    }

    Model = Model
    Component = Component

    container = React.createRef()
    expandedItems = {}
    onSnapshotDisposer = noop
    sortable = null
    state = {
      expanded: {},
      sortOption: null,
    }

    componentDidMount() {
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
      this.onSnapshotDisposer = onSnapshot(this.props.collection, () => this.forceUpdate())
    }
    componentWillReceiveProps() {
      if (this.sortable) this.sortable.option('disabled', !this.props.sortable)
    }
    componentWillUnmount() { this.onSnapshotDisposer() }

    handleAdd = () => {
      this.props.collection.push(Model.create({}))
      this.forceUpdate()
    }
    handleDelete = ({ target }) => {
      const index = parseInt(target.parentNode.getAttribute('data-index'), 10)
      this.props.collection.deleteAt(index)
      this.forceUpdate()
    }
    handleToggleExpanded = (hash, expanded) => {
      this.setState(state => ({
        ...state,
        expanded: { ...state.expanded, [hash]: expanded },
      }))
    }
    handleSort = () => this.props.collection.sortBy('name')
    handleSortChange = (clicked) => {
      const { sortOption: current } = this.state
      this.setState({ sortOption: current === clicked ? null : clicked })
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


    render() {
      const { className = '', collection, columns, sortable, title } = this.props
      const { expanded, sortOption } = this.state
      let sorted = this.props.collection.asArray
      if (sortOption !== null) {
        sorted = sorted.sort(sortOption.sorter)
      }

      return (
        <div className={`list ${className}`.trim()} ref={this.container} style={{ columns }}>
          <div className="title-bar">
            {this.renderSortWidget()}
            <div className="text">{title}</div>
            <button className="add icon-add" onClick={this.handleAdd} />
          </div>
          {sorted.map(model => (
            <div
              className={`list-item-wrapper ${expanded[model.hash] ? 'expanded' : ''}`.trim()}
              data-index={collection.indexOf(model)}
              key={model.hash}
            >
              {(sortable && sortOption === null) && <div className="drag-handle" />}
              <Component
                model={model}
                onDelete={collection.delete}
                onToggleExpanded={this.handleToggleExpanded}
              />
              <button className="icon-remove" onClick={this.handleDelete} />
            </div>
          ))}
        </div>
      )
    }
  }
}
