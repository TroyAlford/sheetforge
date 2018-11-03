import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Rating from '@/components/Rating'
import bound from '@/utilities/bound'
import math from '@/utilities/math'
import noop from '@/utilities/noop'
import './Attribute.scss'

@observer class Attribute extends Component {
  static defaultProps = {
    model: {},
    onDelete: noop,
    rating: false,
  }

  static sortOptions = [{
    display: 'icon-sort-name-asc',
    getter: model => model.name,
  }, {
    display: 'icon-sort-value-asc',
    getter: model => model.modifiedValue(),
  }]

  CACHE = {}

  componentDidMount() {
    this.onSnapshotDisposer = onSnapshot(this.props.model.character, this.handleSnapshot)
  }
  componentWillUnmount() { this.onSnapshotDisposer() }

  handleSnapshot = (snapshot) => {
    const effects = this.props.model.effects().map(e => e.toJSON())
    if (
      JSON.stringify(effects) !== JSON.stringify(this.CACHE.effects) ||
      JSON.stringify(snapshot.conditions) !== this.CACHE.conditions ||
      this.CACHE.value !== this.props.model.value()
    ) {
      this.CACHE.conditions = JSON.stringify(snapshot.conditions)
      this.CACHE.effects = effects
      this.CACHE.value = this.props.model.value()
      this.forceUpdate()
    }
  }
  handleChangeName = (name) => {
    const { id } = this.props.model
    this.props.model.set({ name })
    this.props.model.character.effects()
      .filter(effect => effect.targetId === id)
      .forEach((effect) => {
        effect.set({ targetId: '' })
        effect.set({ targetId: this.props.model.id })
      })
  }
  handleCommitName = () => (this.props.model.name === '' && this.props.onDelete(this.props.model))
  handleChangeValue = (raw) => {
    let value = raw
    try {
      if (math.isInteger(raw)) {
        value = bound(parseInt(raw, 10) || '', { max: 999, min: -99 })
      }
    } catch { }
    this.props.model.set({ raw: value })
  }

  render() {
    const { model, rating } = this.props
    const className = [
      'attribute',
      `as-${rating ? 'rating' : 'numeric'}`,
      `${model.isComputed ? 'is' : 'not'}-computed`,
    ].join(' ')

    const modifier = model.modifier()
    const modifierClassName = [
      'modifier',
      modifier > 0 && 'positive',
      modifier < 0 && 'negative',
      modifier === 0 && 'zero',
    ].filter(Boolean).join(' ')

    return (
      <div className={className}>
        <Editable
          className="name"
          onChange={this.handleChangeName}
          onEditEnd={this.handleCommitName}
          value={model.name}
        />
        <Editable
          className="value rating"
          onChange={this.handleChangeValue}
          readOnlyValue={(
            <Rating
              allowExcess
              current={model.modifiedValue()}
              maximum={model.value()}
            />
          )}
          type="text"
          value={model.raw}
        />
        <Editable
          className="value numeric"
          onChange={this.handleChangeValue}
          readOnlyValue={model.value()}
          type="text"
          value={model.raw}
        />
        {model.effects().length !== 0 && (
          <div
            className={modifierClassName}
            title={model.modifierText()}
          >
            {model.modifiedValue()}
          </div>
        )}
      </div>
    )
  }
}

export default Attribute
