import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import EffectList from '@/components/EffectList'
import Expandable from '@/components/Expandable'
import TraitModel from '@/models/Trait'
import modelPropType from '@/utilities/prop-types/model'
import './Trait.scss'

@observer class Trait extends Component {
  static defaultProps = {
    model: {},
  }

  static propTypes = {
    model: modelPropType(TraitModel),
  }

  onChangeName = name => this.props.model.set({ name })

  onChangeValue = value => this.props.model.set({ value })

  render() {
    const { model } = this.props

    return (
      <div className="trait">
        <Editable className="name" onChange={this.onChangeName} value={model.name} />
        <Editable className="value" onChange={this.onChangeValue} value={model.value} />
        <Expandable>
          <EffectList collection={model.effects} />
        </Expandable>
      </div>
    )
  }
}

export default Trait
