import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import EffectModel from '@/models/Effect'
import modelPropType from '@/utilities/prop-types/model'
import './Effect.scss'

@observer class Effect extends Component {
  static defaultProps = {
    model: {},
  }

  static propTypes = {
    model: modelPropType(EffectModel),
  }

  handleChangeCondition = condition => this.props.model.set({ condition })

  handleChangeModifier = modifier => this.props.model.set({ modifier })

  handleChangeModifies = ({ target: { value } }) => this.props.model.set({ modifies: value })

  render() {
    const { availableTargets, condition = '', isApplicable, modifies, modifier } = this.props.model

    return (
      <div className={`effect ${isApplicable ? 'applicable' : ''}`.trim()}>
        <select className="modifies" value={modifies} onChange={this.handleChangeModifies}>
          {availableTargets.map(({ id, displayName }) => (
            <option key={id} value={id}>{displayName}</option>
          ))}
        </select>
        <Editable className="modifier" onChange={this.handleChangeModifier} value={modifier} />
        <Editable className="condition" onChange={this.handleChangeCondition} value={condition} placeholder="Any" />
      </div>
    )
  }
}

export default Effect
