/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import Editable from '../components/Editable'

@observer export default class Attribute extends Component {
  static defaultProps = {
    className: 'none',
    min: -10,
    max: 10,
    model: { id: 'none', name: '' },
    modifier: 0,
  }

  renderValue = () => {
    const { model } = this.props
    const { computed, min, max, value } = model
    const modifier = 0

    const current = typeof value !== 'function' ? value : value()
    const isModified = Boolean(!computed && modifier)
    const displayValue = computed ? (current + modifier) : current
    const display = computed
      ? <Editable max={max} min={min} readonly value={displayValue} />
      : <Editable max={max} min={min} onChange={model.setValue} value={current} />

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
    const { className = '', model } = this.props
    if (!model) console.log(model)

    return (
      <div className={`attribute ${className} ${model.id}`}>
        <span className="caption">{model.name}</span>
        {this.renderValue()}
      </div>
    )
  }
}
