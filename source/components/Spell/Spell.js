import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Effect from '@/components/Effect'
import Expandable from '@/components/Expandable'
import ListOf from '@/components/List'
import ResourceCost from '@/components/ResourceCost'
import EffectModel from '@/models/Effect'
import ResourceCostModel from '@/models/ResourceCost'
import './Spell.scss'

const EffectList = ListOf(EffectModel, Effect, { className: 'effect-list' })

const ListOfCosts = ListOf(ResourceCostModel, ResourceCost, {
  className: 'resource-cost-list',
})

@observer class Spell extends Component {
  static defaultProps = {
    model: {},
  }

  handleCast = () => {
    this.props.model.cast()
    this.forceUpdate()
  }

  handleChangeDescription = description => this.props.model.set({ description })

  handleChangeName = name => this.props.model.set({ name })

  handleToggleActive = () => this.props.model.set({ isActive: !this.props.model.isActive })

  render() {
    const { costs, description, name, effects, isActive, isAffordable } = this.props.model

    return (
      <div className={`spell ${isActive ? '' : 'in'}active`}>
        <Editable className="is-active" onChange={this.handleToggleActive} value={isActive} />
        <Editable className="name" onChange={this.handleChangeName} value={name} />
        <button className="cast icon-magic" onClick={this.handleCast} disabled={!isAffordable()} />
        <Expandable>
          <Editable
            className="description"
            type="multiline"
            onChange={this.handleChangeDescription}
            placeholder="Description..."
            value={description}
          />
          <ListOfCosts collection={costs} title="Casting Costs" />
          <EffectList collection={effects} title="Effects" />
        </Expandable>
      </div>
    )
  }
}

export default Spell
