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
    if (JSON.stringify(effects) !== JSON.stringify(this.CACHE.effects)) {
      this.CACHE.effects = effects
      this.forceUpdate()
    }
  }

  onChangeName = name => this.props.model.set({ name })

  onChangeValue = value => this.props.model.set({ value })

  render() {
    const { model } = this.props
    const modifier = model.modifier()
    const modifierClass = [
      'modifier',
      modifier > 0 && 'positive',
      modifier < 0 && 'negative',
      modifier === 0 && 'zero',
    ].join(' ')

    // <div className="attribute" effects={model.effects().length}>
    return (
      <div className="attribute">
        <Editable className="name" onChange={this.onChangeName} value={model.name} />
        <Editable className="value" onChange={this.onChangeValue} value={model.value} />
        {modifier !== 0 && (
          <div className={modifierClass} title={model.modifierText()}>{model.displayValue()}</div>
        )}
      </div>
    )
  }
}

export default Attribute
