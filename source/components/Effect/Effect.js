import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './Effect.scss'

@observer class Effect extends Component {
  static defaultProps = {
    model: {},
  }

  handleChangeCondition = condition => this.props.model.set({ condition })
  handleChangeModifier = modifier => this.props.model.set({ modifier })
  handleChangeTarget = ({ target: { value } }) => this.props.model.set({ targetName: value })

  render() {
    const { available, condition = '', isApplicable, modifier, targetName } = this.props.model

    return (
      <div className={`effect ${isApplicable ? 'applicable' : ''}`.trim()}>
        <select className="target" value={targetName} onChange={this.handleChangeTarget}>
          {available.map(({ hash, name }) => (
            <option key={hash} value={name}>{name}</option>
          ))}
        </select>
        <Editable
          className="modifier"
          max={999}
          min={-99}
          onChange={this.handleChangeModifier}
          value={modifier}
        />
        <Editable
          className="condition"
          onChange={this.handleChangeCondition}
          placeholder="Any"
          value={condition}
        />
      </div>
    )
  }
}

export default Effect
