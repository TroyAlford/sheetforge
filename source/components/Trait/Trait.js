import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import EffectList from '@/components/EffectList'
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

  onChangeName = displayName => this.props.model.set({ displayName })

  onChangeValue = value => this.props.model.set({ value })

  render() {
    const { model } = this.props

    return (
      <div className="trait">
        <div className="first row">
          <Editable
            className="displayName"
            onChange={this.onChangeName}
            value={model.displayName}
          />
          <Editable
            className="value"
            onChange={this.onChangeValue}
            value={model.value}
          />
        </div>
        <EffectList className="row" model={model.effects} />
      </div>
    )
  }
}

export default Trait
