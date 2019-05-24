import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './ResourceCost.scss'

class ResourceCost extends Component {
  static defaultProps = {
    model: {},
  }

  static sortOptions = [{
    display: 'icon-sort-name-asc',
    getter: model => model.resourceName,
  }, {
    display: 'icon-sort-value-asc',
    getter: model => model.amount,
  }]

  handleChangeAmount = amount => this.props.model.set({ amount })
  handleChangeResource = ({ target: { value } }) => this.props.model.set({ resourceName: value })

  render() {
    const { amount, available, resourceName } = this.props.model

    return (
      <div className="resource-cost">
        <select className="resource-id" value={resourceName} onChange={this.handleChangeResource}>
          {available.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <Editable
          className="amount"
          max={999}
          min={-99}
          onChange={this.handleChangeAmount}
          value={amount}
        />
      </div>
    )
  }
}

export default ResourceCost
