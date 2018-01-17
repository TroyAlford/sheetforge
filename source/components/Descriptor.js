/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from './Editable'

@observer export default class Descriptor extends Component {
  handleChange = (value) => {
    this.props.onChange(this.props.name, value)
  }

  render = () => (
    <div className={`descriptor ${this.props.name}`}>
      <strong>{this.props.name}</strong>
      <Editable
        onChange={this.handleChange}
        value={this.props.value}
      />
    </div>
  )
}
