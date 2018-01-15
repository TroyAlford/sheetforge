/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import Editable from './Editable'

@observer export default class Attribute extends Component {
  handleChange = (value) => {
    const { character, name } = this.props
    character.layers[0][name] = value
  }

  render = () => {
    const { caption, character, className, computed, name } = this.props
    let modified = false
    let valueDisplay

    if (character) {
      const modifiedValue = character.modifierFor(name)
      const unmodifiedValue = character.layers[0][name]
      modified = !computed && modifiedValue !== unmodifiedValue
      valueDisplay = (
        <Fragment>
          <Editable
            max={10}
            min={-10}
            onChange={this.handleChange}
            readonly={Boolean(computed)}
            value={computed ? modifiedValue : unmodifiedValue}
          />
          {modified && <span className="temporary">{modifiedValue}</span>}
        </Fragment>
      )
    }

    const classes = [
      'attribute', className, name,
      modified ? 'modified' : '',
    ].filter(Boolean)

    return (
      <div className={classes.join(' ')}>
        <span className="caption">{caption || name}</span>
        {valueDisplay}
      </div>
    )
  }
}
