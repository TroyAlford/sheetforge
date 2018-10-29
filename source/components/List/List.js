import { onSnapshot } from 'mobx-state-tree'
import React from 'react'
import Sortable from 'sortablejs'
import CollectionOf from '@/models/generic/Collection'
import noop from '@/utilities/noop'
import './List.scss'

export default (Model, Component, props = {}) => class List extends React.Component {
  static defaultProps = {
    className: '',
    collection: CollectionOf(Model).create([]),
    columns: 1,
    sortable: true,
    title: props.title || '',
    ...props,
  }

  container = React.createRef()
  expandedItems = {}
  onSnapshotDisposer = noop
  sortable = null
  state = { expanded: {} }

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
      expanded: { ...state.expanded, [hash]: expanded },
    }))
  }
  handleSort = () => this.props.collection.sortBy('name')

  render() {
    const { className = '', collection, columns, sortable, title } = this.props
    const { expanded } = this.state

    return (
      <div className={`list ${className}`.trim()} ref={this.container} style={{ columns }}>
        <div className="title-bar">
          {sortable && <button className="sort icon-sort-name-asc" onClick={this.handleSort} />}
          <div className="text">{title}</div>
          <button className="add icon-add" onClick={this.handleAdd} />
        </div>
        {collection.map(model => (
          <div
            className={`list-item-wrapper ${expanded[model.hash] ? 'expanded' : ''}`.trim()}
            data-index={collection.indexOf(model)}
            key={model.hash}
          >
            {sortable && <div className="drag-handle" />}
            <Component model={model} onDelete={collection.delete} onToggleExpanded={this.handleToggleExpanded} />
            <button className="icon-remove" onClick={this.handleDelete} />
          </div>
        ))}
      </div>
    )
  }
}
