import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import EffectList from '@/components/EffectList'
import Expandable from '@/components/Expandable'
import ListOf from '@/components/List'
import ResourceCost from '@/components/ResourceCost'
import ResourceCostModel from '@/models/ResourceCost'
import SpellModel from '@/models/Spell'
import modelPropType from '@/utilities/prop-types/model'
import './Spell.scss'

const ListOfCosts = ListOf(ResourceCostModel, ResourceCost, {
  addButtonText: 'Add Cost',
  className: 'resource-costs',
})

@observer class Spell extends Component {
  static defaultProps = {
    model: {},
  }

  static propTypes = {
    model: modelPropType(SpellModel),
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
        <button className="cast icon-magic" onClick={this.handleCast} disabled={!isAffordable}>Cast</button>
        <Expandable>
          <Editable
            className="description"
            type="multiline"
            onChange={this.handleChangeDescription}
            placeholder="Description..."
            value={description}
          />
          <ListOfCosts collection={costs} />
          <EffectList collection={effects} />
        </Expandable>
      </div>
    )
  }
}

export default Spell
