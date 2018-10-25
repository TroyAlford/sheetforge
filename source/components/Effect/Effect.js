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
          {available.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <Editable className="modifier" onChange={this.handleChangeModifier} value={modifier} />
        <Editable className="condition" onChange={this.handleChangeCondition} value={condition} placeholder="Any" />
      </div>
    )
  }
}

export default Effect
