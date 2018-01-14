/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from './Editable'

@observer export default class Attribute extends Component {
  handleChange = (value) => {
    const { character, name } = this.props
    character.layers[0][name] = value
  }

  render = () => {
    const { caption, character, computed, name } = this.props
    const current = character.modifierFor(name)
    const value = computed ? current : character.layers[0][name]
    const valueDisplay = computed
      ? <span>{value}</span>
      : <Editable value={value} onChange={this.handleChange} min={-10} max={10} />
    const classes = ['attribute', name, (computed && 'computed') || ''].filter(Boolean)
    const style = { gridArea: name }
    const HeaderTag = computed ? 'strong' : 'span'

    return (
      <div className={classes.join(' ')} style={style}>
        <HeaderTag>{caption || name}</HeaderTag>
        {valueDisplay}
      </div>
    )
  }
}
