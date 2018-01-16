/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import Editable from '../components/Editable'

@observer export default class Attribute extends Component {
  handleChange = (newValue) => {
    const { character, name } = this.props
    const attributes = character.layers[0]

    const oldValue = attributes.get(name)
    const powerBefore = attributes.get('power').apply(character)

    attributes.set(name, newValue)

    const xp = attributes.get('xp')
    const powerAfter = attributes.get('power').apply(character)
    const xpCost = powerAfter - powerBefore

    if (xpCost > xp) {
      attributes.set(name, oldValue)
    } else {
      attributes.set('xp', xp - xpCost)
    }
  }

  render = () => {
    const { caption, character, className, computed, min = -10, max = 10, name } = this.props
    let modified = false
    let valueDisplay

    if (character) {
      const modifiedValue = character.modifierFor(name)
      const unmodifiedValue = character.layers[0].get(name)
      modified = !computed && modifiedValue !== unmodifiedValue
      valueDisplay = (
        <Fragment>
          <Editable
            max={max}
            min={min}
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
