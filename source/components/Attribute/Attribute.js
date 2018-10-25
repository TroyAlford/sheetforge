import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Rating from '@/components/Rating'
import './Attribute.scss'

@observer class Attribute extends Component {
  static defaultProps = {
    model: {},
    rating: false,
  }

  CACHE = {}

  componentDidMount() {
    this.onSnapshotDisposer = onSnapshot(this.props.model.character, this.handleSnapshot)
  }

  componentWillUnmount() {
    this.onSnapshotDisposer()
  }

  handleSnapshot = () => {
    const effects = this.props.model.effects().map(e => e.toJSON())
    if (
      JSON.stringify(effects) !== JSON.stringify(this.CACHE.effects) ||
      this.CACHE.value !== this.props.model.value()
    ) {
      this.CACHE.effects = effects
      this.CACHE.value = this.props.model.value()
      this.forceUpdate()
    }
  }

  onChangeName = name => this.props.model.set({ name })

  onChangeValue = raw => this.props.model.set({ raw })

  renderRating = () => {
    const { model } = this.props

    return (<>
      <Editable
        className="name"
        onChange={this.onChangeName}
        readOnlyValue={model.name}
        value={model.name}
      />
      <Editable
        className="value"
        onChange={this.onChangeValue}
        readOnlyValue={(
          <Rating
            allowExcess
            current={model.modifiedValue()}
            maximum={model.value()}
          />
        )}
        value={model.raw}
      />
    </>)
  }

  renderModifier = () => {
    const { model } = this.props
    const modifier = model.modifier()

    if (model.effects().length === 0) return null

    const className = [
      'modifier',
      modifier > 0 && 'positive',
      modifier < 0 && 'negative',
      modifier === 0 && 'zero',
    ].filter(Boolean).join(' ')

    return <div className={className} title={model.modifierText()}>{model.modifiedValue()}</div>
  }

  renderNumeric = () => {
    const { model } = this.props

    return (<>
      <Editable className="name" onChange={this.onChangeName} value={model.name} />
      <Editable
        className="value"
        onChange={this.onChangeValue}
        readOnlyValue={model.value()}
        value={model.raw}
      />
      {this.renderModifier()}
    </>)
  }

  render() {
    const { model, rating } = this.props
    const className = [
      'attribute',
      `as-${rating ? 'rating' : 'numeric'}`,
      `${model.isComputed ? 'is' : 'not'}-computed`,
    ].join(' ')

    return (
      <div className={className}>
        {rating ? this.renderRating() : this.renderNumeric()}
      </div>
    )
  }
}

export default Attribute
