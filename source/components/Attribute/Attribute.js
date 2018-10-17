import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import AttributeModel from '@/models/Attribute'
import modelPropType from '@/utilities/prop-types/model'
import './Attribute.scss'

@observer class Attribute extends Component {
  static defaultProps = {
    model: {},
  }

  static propTypes = {
    model: modelPropType(AttributeModel),
  }

  onChangeName = name => this.props.model.set({ name })

  onChangeValue = value => this.props.model.set({ value })

  renderModifier = () => {
    const { displayValue, modifier, modifierText } = this.props.model

    const classNames = [
      'modifier',
      modifier > 0 && 'positive',
      modifier < 0 && 'negative',
      modifier === 0 && 'zero',
    ].join(' ')

    if (modifier === 0) return ''

    return (
      <div className={classNames} title={modifierText}>{displayValue}</div>
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
