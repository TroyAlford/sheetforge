import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './Descriptor.scss'

export default @observer class Descriptor extends Component {
  static defaultProps = {
    model: {},
  }

  onChangeName = displayName => this.props.model.set({ displayName })

  onChangeValue = value => this.props.model.set({ value })

  render() {
    return (
      <div className="descriptor">
        <Editable
          className="displayName"
          onChange={this.onChangeName}
          value={this.props.model.displayName}
        />
        <Editable
          className="value"
          type="text"
          onChange={this.onChangeValue}
          value={this.props.model.value}
        />
      </div>
    )
  }
}
