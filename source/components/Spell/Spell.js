import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Effect from '@/components/Effect'
import Expandable from '@/components/Expandable'
import ListOf from '@/components/List'
import ResourceCost from '@/components/ResourceCost'
import EffectModel from '@/models/Effect'
import ResourceCostModel from '@/models/ResourceCost'
import noop from '@/utilities/noop'
import './Spell.scss'

const EffectList = ListOf(EffectModel, Effect, { className: 'effect-list' })

const ListOfCosts = ListOf(ResourceCostModel, ResourceCost, {
  className: 'resource-cost-list',
})

@observer class Spell extends Component {
  static defaultProps = {
    model: {},
    onDelete: noop,
    onToggleExpanded: noop,
  }

  static sortOptions = [{
    display: 'icon-sort-name-asc',
    getter: model => [model.name, model.level],
  }, {
    display: 'icon-sort-value-asc',
    getter: model => [model.level, model.name],
  }, {
    display: 'icon-sort-value-desc',
    getter: model => [-model.level, model.name],
  }, {
    display: 'icon-magic',
    getter: model => [!model.isActive, model.name],
  }]

  onResourceSnapshotDisposer = noop

  componentDidMount() {
    const { resources } = this.props.model.character
    this.onResourceSnapshotDisposer = onSnapshot(resources, () => this.forceUpdate())
  }
  componentWillUnmount() { this.onResourceSnapshotDisposer() }

  handleCast = () => {
    this.props.model.cast()
    this.forceUpdate()
  }

  handleChangeDescription = description => this.props.model.set({ description })
  handleChangeLevel = level => this.props.model.set({ level })
  handleChangeName = name => this.props.model.set({ name })
  handleCommitName = () => (this.props.model.name === '' && this.props.onDelete(this.props.model))
  handleToggleActive = () => this.props.model.set({ isActive: !this.props.model.isActive })

  render() {
    const {
      costs, description, name, effects, hash, isActive, isAffordable, level,
    } = this.props.model

    return (
      <div className={`spell ${isActive ? '' : 'in'}active`}>
        <Editable className="is-active" onChange={this.handleToggleActive} value={isActive} />
        <Editable
          className="name"
          onChange={this.handleChangeName}
          onEditEnd={this.handleCommitName}
          value={name}
        />
        <Editable
          className="level"
          onChange={this.handleChangeLevel}
          value={level}
        />
        <button className="cast icon-magic" onClick={this.handleCast} disabled={!isAffordable()} />
        <Expandable onToggle={expanded => this.props.onToggleExpanded(hash, expanded)}>
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
