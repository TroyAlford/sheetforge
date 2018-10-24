import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './Attribute.scss'

@observer class Attribute extends Component {
  static defaultProps = {
    model: {},
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

  render() {
    const { model } = this.props
    const modifier = model.modifier()
    const modifierClass = [
      'modifier',
      modifier > 0 && 'positive',
      modifier < 0 && 'negative',
      modifier === 0 && 'zero',
    ].join(' ')

    return (
      <div className={`attribute ${model.isComputed ? 'computed' : 'numeric'}`}>
        <Editable className="name" onChange={this.onChangeName} value={model.name} />
        <Editable
          className="value"
          onChange={this.onChangeValue}
          readOnlyValue={model.value()}
          value={model.raw}
        />
        {modifier !== 0 && (
          <div className={modifierClass} title={model.modifierText()}>{model.modifiedValue()}</div>
        )}
      </div>
    )
  }
}

export default Attribute
