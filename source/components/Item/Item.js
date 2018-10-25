import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Effect from '@/components/Effect'
import Expandable from '@/components/Expandable'
import ListOf from '@/components/List'
import EffectModel from '@/models/Effect'
import './Item.scss'

const EffectList = ListOf(EffectModel, Effect, { className: 'effect-list' })

@observer class Item extends Component {
  static defaultProps = {
    model: {},
  }

  handleChangeDescription = description => this.props.model.set({ description })

  handleChangeName = name => this.props.model.set({ name })

  handleToggleEquipped = () => this.props.model.set({ equipped: !this.props.model.equipped })

  render() {
    const { description, name, effects, equipped } = this.props.model

    return (
      <div className={`item ${equipped ? '' : 'un'}equipped`}>
        <Editable className="equipped" onChange={this.handleToggleEquipped} value={equipped} />
        <Editable className="name" onChange={this.handleChangeName} value={name} />
        <Expandable>
          <Editable
            className="description"
            type="multiline"
            onChange={this.handleChangeDescription}
            placeholder="Description..."
            value={description}
          />
          <EffectList collection={effects} title="Effects" />
        </Expandable>
      </div>
    )
  }
}

export default Item
