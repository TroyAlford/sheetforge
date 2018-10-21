import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './Attribute.scss'

@observer class Attribute extends Component {
  static defaultProps = {
    model: {},
  }

  onChangeName = name => this.props.model.set({ name })

  onChangeValue = value => this.props.model.set({ value })

  renderModifier = () => {
    const { model } = this.props

    const classNames = [
      'modifier',
      model.modifier > 0 && 'positive',
      model.modifier < 0 && 'negative',
      model.modifier === 0 && 'zero',
    ].join(' ')

    if (model.modifier === 0) return ''

    return (
      <div className={classNames} title={model.modifierText}>{model.displayValue}</div>
    )
  }

  render() {
    const { model } = this.props

    return (
      <div className="attribute">
        <Editable className="name" onChange={this.onChangeName} value={model.name} />
        <Editable className="value" onChange={this.onChangeValue} value={model.value} />
        {this.renderModifier()}
      </div>
    )
  }
}

export default Attribute
