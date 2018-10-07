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

  onChangeName = displayName => this.props.model.set({ displayName })

  onChangeValue = value => this.props.model.set({ value })

  renderModifier = () => {
    const { displayValue, effects, modifier, modifierText } = this.props.model
    if (!effects.length) return null

    const classNames = [
      'modifier',
      modifier > 0 && 'positive',
      modifier < 0 && 'negative',
      modifier === 0 && 'zero',
    ].join(' ')

    return (
      <div className={classNames} title={modifierText}>
        {modifier} = {displayValue}
      </div>
    )
  }

  render() {
    const { model } = this.props

    return (
      <div className="attribute">
        <Editable className="displayName" onChange={this.onChangeName} value={model.displayName} />
        <Editable className="value" onChange={this.onChangeValue} value={model.value} />
        {this.renderModifier()}
      </div>
    )
  }
}

export default Attribute
