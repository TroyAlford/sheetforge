import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './Descriptor.scss'

@observer class Descriptor extends Component {
  static defaultProps = {
    model: {},
  }

  onChangeName = name => this.props.model.set({ name })

  onChangeValue = value => this.props.model.set({ value })

  render() {
    return (
      <div className="descriptor">
        <Editable
          className="name"
          onChange={this.onChangeName}
          value={this.props.model.name}
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

export default Descriptor
