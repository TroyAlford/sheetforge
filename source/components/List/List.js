import { observer } from 'mobx-react'
import PropTypes from 'prop-types' // eslint-disable-line import/no-extraneous-dependencies
import React from 'react'
import CollectionOf from '@/models/generic/Collection'
import modelPropType from '@/utilities/prop-types/model'
import './List.scss'

export default (Model, Component, props = {}) => observer(
  class List extends React.Component {
    static defaultProps = {
      addButtonText: 'Add',
      className: '',
      collection: [],
      prepend: false,
      ...props,
    }

    static propTypes = {
      addButtonText: PropTypes.string,
      className: PropTypes.string,
      collection: modelPropType(CollectionOf(Model)),
    }

    handleAdd = () => {
      if (this.props.prepend) {
        this.props.collection.unshift({})
      } else {
        this.props.collection.push({})
      }
      this.forceUpdate()
    }

    handleDelete = ({ target }) => {
      const index = parseInt(target.getAttribute('data-index'), 10)
      this.props.collection.deleteAt(index)
      this.forceUpdate()
    }

    render() {
      const { addButtonText, className, collection } = this.props

      return (
        <div className={`list ${className}`.trim()}>
          <button className="icon-add" onClick={this.handleAdd}>{addButtonText}</button>
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
