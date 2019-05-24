import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './Effect.scss'

class Effect extends Component {
  static defaultProps = {
    model: {},
  }

  static sortOptions = [{
    display: 'icon-sort-name-asc',
    getter: model => [!model.targetId, model.targetId],
  }, {
    display: 'icon-sort-value-asc',
    getter: model => [!model.condition, model.modifier],
  }]

  handleChangeCondition = condition => this.props.model.set({ condition })
  handleChangeModifier = modifier => this.props.model.set({ modifier })
  handleChangeTarget = ({ target: { value } }) => this.props.model.set({ targetId: value })

  render() {
    const { available, condition = '', isApplicable, modifier, targetId } = this.props.model

    return (
      <div className={`effect ${isApplicable ? 'applicable' : ''}`.trim()}>
        <select className="target" value={targetId} onChange={this.handleChangeTarget}>
          {available().map(({ hash, id, name }) => (
            <option key={hash} value={id}>{name}</option>
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
