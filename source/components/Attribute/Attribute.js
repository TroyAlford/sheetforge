import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Rating from '@/components/Rating'
import bound from '@/utilities/bound'
import noop from '@/utilities/noop'
import './Attribute.scss'

class Attribute extends Component {
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
    let value = String(raw).replace(/[^a-z0-9+*()\-/, ]/gi, '')
    if (!Number.isNaN(Number(raw))) {
      value = bound(Number(raw) || '', { max: 999, min: -99 })
    }
    this.props.model.set({ raw: value })
  }
  handleCommitValue = () => {
    if (String(this.props.model.raw) === '') this.props.model.set({ raw: 0 })
  }
  handleValueKeyDown = ({ key }) => {
    const { model } = this.props
    if (model.isComputed) return

    switch (key) {
      case 'ArrowUp':
        model.set({ raw: model.value() + 1 }); break
      case 'ArrowDown':
        model.set({ raw: model.value() - 1 }); break
      default:
    }
  }

  render() {
    const { model, rating } = this.props
    const modifiedValue = model.modifiedValue()
    const value = model.value()

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
          onEditEnd={this.handleCommitValue}
          onKeyDown={this.handleValueKeyDown}
          readOnlyValue={(
            <Rating
              allowExcess
              current={modifiedValue}
              maximum={value}
            />
          )}
          type="text"
          value={model.raw}
        />
        <Editable
          className="value numeric"
          onChange={this.handleChangeValue}
          onEditEnd={this.handleCommitValue}
          onKeyDown={this.handleValueKeyDown}
          readOnlyValue={value}
          type="text"
          value={model.raw}
        />
        {model.effects().length !== 0 && (
          <div
            className={modifierClassName}
            title={model.modifierText()}
          >
            {modifiedValue}
          </div>
        )}
      </div>
    )
  }
}

export default Attribute
