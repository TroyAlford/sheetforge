/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import Editable from '../components/Editable'

@observer export default class Attribute extends Component {
  static defaultProps = {
    min: -10,
    max: 10,
    modifier: 0,
  }

  handleChange = (newValue) => {
    const { attributes, name } = this.props

    const oldValue = attributes.get(name)
    const powerBefore = attributes.get('power')()

    attributes.set(name, newValue)

    const xp = attributes.get('xp')
    const powerAfter = attributes.get('power')()
    const xpCost = powerAfter - powerBefore

    if (xpCost > xp) {
      attributes.set(name, oldValue)
    } else {
      attributes.set('xp', xp - xpCost)
    }
  }

  renderValue = () => {
    const { attributes, computed, modifier = 0, max, min, name } = this.props

    if (!attributes) return undefined

    const value = attributes.get(name)
    const current = typeof value !== 'function' ? value : value()
    const isModified = Boolean(!computed && modifier)
    const displayValue = computed ? (current + modifier) : current
    const display = computed
      ? <Editable max={max} min={min} readonly value={displayValue} />
      : <Editable max={max} min={min} onChange={this.handleChange} value={current} />

    const classes = [
      'value',
      isModified ? 'modified' : '',
    ].filter(Boolean)

    return (
      <div className={classes.join(' ')}>
        {display}
        {isModified && <Fragment>↣<span className="temporary">{modifier}</span></Fragment>}
      </div>
    )
  }

  render = () => {
    const { caption, className, name } = this.props

    return (
      <div className={`attribute ${className} ${name}`}>
        <span className="caption">{caption || name}</span>
        {this.renderValue()}
      </div>
    )
  }
}
