import React, { Component } from 'react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'
import './Descriptor.scss'

class Descriptor extends Component {
  static defaultProps = {
    model: {},
    onDelete: noop,
  }

  static sortOptions = [{
    display: 'icon-sort-name-asc',
    getter: model => model.name,
  }, {
    display: 'icon-sort-value-asc',
    getter: model => model.value,
  }]

  handleChangeName = name => this.props.model.set({ name })
  handleChangeValue = value => this.props.model.set({ value })
  handleCommitName = () => (this.props.model.name === '' && this.props.onDelete(this.props.model))

  render() {
    return (
      <div className="descriptor">
        <Editable
          className="name"
          onChange={this.handleChangeName}
          onEditEnd={this.handleCommitName}
          value={this.props.model.name}
        />
        <Editable
          className="value"
          type="text"
          onChange={this.handleChangeValue}
          value={this.props.model.value}
        />
      </div>
    )
  }
}

export default Descriptor
