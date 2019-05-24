import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Expandable from '@/components/Expandable'
import './Conditions.scss'

export default class Conditions extends Component {
  static defaultProps = {
    model: {},
  }

  CACHE = {}

  handleSnapshot = () => {
    const availableConditions = this.props.model.availableConditions()
    const conditions = this.props.model.conditions.asArray

    if (
      JSON.stringify(availableConditions) !== JSON.stringify(this.CACHE.availableConditions) ||
      JSON.stringify(conditions) !== JSON.stringify(this.CACHE.conditions)
    ) {
      this.CACHE.availableConditions = availableConditions
      this.CACHE.conditions = conditions
      this.forceUpdate()
    }
  }

  handleCheckbox = (condition, value) => {
    const { conditions } = this.props.model

    if (value && !conditions.includes(condition)) {
      conditions.push(condition)
    } else if (typeof conditions.delete === 'function') {
      conditions.delete(condition)
    } else {
      conditions.splice(conditions.indexOf(condition), 1)
    }
    this.forceUpdate()
  }

  renderCondition = (condition) => {
    const { conditions } = this.props.model
    const isCurrent = conditions.includes(condition)
    return (
      <div key={condition} className={`condition ${isCurrent ? 'current' : 'available'}`}>
        <Editable
          className="current"
          onChange={value => this.handleCheckbox(condition, value)}
          value={isCurrent}
        />
        <div className="name">{condition}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="conditions">
        <Expandable>
          {this.props.model.availableConditions().map(this.renderCondition)}
        </Expandable>
      </div>
    )
  }
}
