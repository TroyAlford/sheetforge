/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from './Editable'

@observer export default class Descriptor extends Component {
  handleChange = (value) => {
    const { character, name } = this.props
    character.descriptors.set(name, value)
  }

  render = () => {
    const { character, name } = this.props
    const value = character.descriptors.get(name)
    const style = { gridArea: name }

    return (
      <div className={`descriptor ${name}`} style={style}>
        <strong>{name}</strong>
        <Editable value={value} onChange={this.handleChange} />
      </div>
    )
  }
}
