import { observer } from 'mobx-react'
import React from 'react'
import Sortable from 'sortablejs'
import math from '@/utilities/math'
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

    state = {
      sortDirection: 'desc',
    }

    container = React.createRef()

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
                .map(this.props.collection.at)
            )
          },
          onStart: () => this.container.current.classList.add('dragging'),
        })
      }
      this.adjustHeight()
    }


    componentWillReceiveProps() {
      if (this.sortable) {
        this.sortable.option('disabled', !this.props.sortable)
      }
    }

    componentDidUpdate() {
      this.adjustHeight()
    }

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
      const index = parseInt(target.getAttribute('data-index'), 10)
      this.props.collection.deleteAt(index)
      this.forceUpdate()
    }

    handleSort = () => {
      this.props.collection.sortBy('name', this.state.sortDirection)
      this.setState(state => ({ sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc' }))
    }

    render() {
      const { className, collection, sortable, title } = this.props
      const { sortDirection } = this.state
      if (this.container.current) this.adjustHeight()

      return (
        <div className={`list ${title ? 'has' : 'no'}-title ${className}`.trim()} ref={this.container}>
          <div className="title-bar">
            {sortable && (
              <button
                className={`sort icon-sort-name-${sortDirection === 'asc' ? 'desc' : 'asc'}`}
                onClick={this.handleSort}
              />
            )}
            <div className="text">{title}</div>
            <button className="add icon-add" onClick={this.handleAdd} />
          </div>
          {collection.map((model, index) => (
            <div className="list-item-wrapper" key={index} data-index={index}>
              {sortable && <div className="drag-handle" data-index={index} />}
              <Component model={model} />
              <button className="icon-remove" data-index={index} onClick={this.handleDelete} />
            </div>
          ))}
        </div>
      )
    }
  }
)
