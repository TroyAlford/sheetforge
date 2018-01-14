/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Editable from './Editable'
import './Descriptor.scss'

export default class Descriptor extends Component {
  handleChange = (value) => {
    this.props.onChange(this.props.name, value)
  }

  render = () => {
    const { name, value } = this.props
    return (
      <div className="descriptor">
        <strong>{name}</strong>
        <Editable value={value} onChange={this.handleChange} />
      </div>
    )
  }
}
