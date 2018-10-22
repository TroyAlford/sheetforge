import { observer } from 'mobx-react'
import React from 'react'
import './List.scss'

export default (Model, Component, props = {}) => observer(
  class List extends React.Component {
    static defaultProps = {
      addButtonText: 'Add',
      className: '',
      collection: [],
      prepend: false,
      title: props.title || Model.name || '',
      ...props,
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

    render() {
      const { className, collection, title } = this.props

      return (
        <div className={`list ${className}`.trim()}>
          <div className="title-bar">
            <div className="text">{title}</div>
            <button className="icon-add" onClick={this.handleAdd} />
          </div>
          {collection.map((model, index) => (
            <div className="list-item-wrapper" key={index}>
              <Component model={model} />
              <button className="icon-remove" data-index={index} onClick={this.handleDelete} />
            </div>
          ))}
        </div>
      )
    }
  }
)
