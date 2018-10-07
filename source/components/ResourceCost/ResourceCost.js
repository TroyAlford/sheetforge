import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import ResourceCostModel from '@/models/ResourceCost'
import modelPropType from '@/utilities/prop-types/model'
import './ResourceCost.scss'

@observer class ResourceCost extends Component {
  static defaultProps = {
    model: {},
  }

  static propTypes = {
    model: modelPropType(ResourceCostModel),
  }

  handleChangeAmount = amount => this.props.model.set({ amount })

  handleChangeResourceId = ({ target }) => this.props.model.set({ resource: target.value })

  render() {
    const { amount, availableResources, resource = {} } = this.props.model

    return (
      <div className="resource-cost">
        <select className="resource-id" value={resource.displayName} onChange={this.handleChangeResourceId}>
          {availableResources.map(({ displayName }) => (
            <option key={displayName} value={displayName}>{displayName}</option>
          ))}
        </select>
        <Editable className="amount" onChange={this.handleChangeAmount} value={amount} />
      </div>
    )
  }
}

export default ResourceCost
