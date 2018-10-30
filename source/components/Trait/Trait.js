import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Effect from '@/components/Effect'
import Expandable from '@/components/Expandable'
import ListOf from '@/components/List'
import EffectModel from '@/models/Effect'
import noop from '@/utilities/noop'
import './Trait.scss'

const EffectList = ListOf(EffectModel, Effect)

@observer class Trait extends Component {
  static defaultProps = {
    model: {},
    onDelete: noop,
    onToggleExpanded: noop,
  }

  static sortOptions = [{
    display: 'icon-sort-name-asc',
    getter: model => model.name,
  }, {
    display: 'icon-sort-value-asc',
    getter: model => model.value,
  }]

  handleChangeName = name => this.props.model.set({ name })
  handleChangeValue = value => this.props.model.set({ value })
  handleCommitName = () => (this.props.model.name === '' && this.props.onDelete(this.props.model))

  render() {
    const { model } = this.props

    return (
      <div className="trait">
        <Editable
          className="name"
          onChange={this.handleChangeName}
          onEditEnd={this.handleCommitName}
          value={model.name}
        />
        <Editable
          className="value"
          max={999}
          min={-99}
          onChange={this.handleChangeValue}
          value={model.value}
        />
        <Expandable onToggle={expanded => this.props.onToggleExpanded(model.hash, expanded)}>
          <EffectList collection={model.effects} title="Effects" />
        </Expandable>
      </div>
    )
  }
}

export default Trait
