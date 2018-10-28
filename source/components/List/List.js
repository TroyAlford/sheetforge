import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import React from 'react'
import Sortable from 'sortablejs'
import hash from '@/utilities/hash'
import math from '@/utilities/math'
import noop from '@/utilities/noop'
import './List.scss'

export default (Model, Component, props = {}) => observer(
  class List extends React.Component {
    static defaultProps = {
      className: '',
      collection: [],
      prepend: false,
      sortable: true,
      title: props.title || '',
      ...props,
    }

    container = React.createRef()
    onSnapshotDisposer = noop
    sortable = null

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
      this.adjustHeight()
    }

    componentWillReceiveProps() {
      if (this.sortable) this.sortable.option('disabled', !this.props.sortable)
    }

    componentDidUpdate() { this.adjustHeight() }

    componentWillUnmount() { this.onSnapshotDisposer() }

    adjustHeight = () => {
      const container = this.container.current
      const containerWidth = container.offsetWidth
      const titleHeight = container.querySelector('.title-bar').offsetHeight
      const listItems = [...container.querySelectorAll('.list-item-wrapper')]

      if (!listItems.length) {
        container.style.maxHeight = 'initial'
        return
      }

      const listItemWidth = listItems[0].offsetWidth
      const listItemHeight = listItems[0].offsetHeight + 2
      const columns = math.floor(containerWidth / listItemWidth)
      const rows = math.ceil(listItems.length / columns)
      if (columns > 1) {
        container.style.maxHeight = `${(rows * listItemHeight) + titleHeight + 10}px`
      } else {
        container.style.maxHeight = 'initial'
      }
    }

    handleAdd = () => {
      if (this.props.prepend) {
        this.props.collection.unshift(Model.create({}))
      } else {
        this.props.collection.push(Model.create({}))
      }
      this.forceUpdate()
    }

    handleDelete = ({ target }) => {
      const index = parseInt(target.parentNode.getAttribute('data-index'), 10)
      this.props.collection.deleteAt(index)
      this.forceUpdate()
    }

    handleSort = () => this.props.collection.sortBy('name')

    render() {
      const { className, collection, sortable, title } = this.props
      if (this.container.current) this.adjustHeight()

      return (
        <div className={`list ${title ? 'has' : 'no'}-title ${className}`.trim()} ref={this.container}>
          <div className="title-bar">
            {sortable && <button className="sort icon-sort-name-asc" onClick={this.handleSort} />}
            <div className="text">{title}</div>
            <button className="add icon-add" onClick={this.handleAdd} />
          </div>
          {collection.map(model => (
            <div
              className="list-item-wrapper"
              data-index={collection.indexOf(model)}
              key={model.hash}
            >
              {sortable && <div className="drag-handle" />}
              <Component model={model} />
              <button className="icon-remove" onClick={this.handleDelete} />
            </div>
          ))}
        </div>
      )
    }
  }
)
