import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import EffectList from '@/components/EffectList'
import ItemModel from '@/models/Item'
import modelPropType from '@/utilities/prop-types/model'
import './Item.scss'

@observer class Item extends Component {
  static defaultProps = {
    model: {},
  }

  static propTypes = {
    model: modelPropType(ItemModel),
  }

  state = {
    expanded: false,
  }

  handleChangeDescription = description => this.props.model.set({ description })

  handleChangeName = displayName => this.props.model.set({ displayName })

  handleToggleEquipped = () => this.props.model.set({ equipped: !this.props.model.equipped })

  // eslint-disable-next-line react/no-access-state-in-setstate
  handleToggleExpanded = () => this.setState({ expanded: !this.state.expanded })

  render() {
    const { description, displayName, effects, equipped } = this.props.model
    const toggleState = this.state.expanded ? 'expanded' : 'collapsed'

    return (
      <div className={`item ${equipped ? '' : 'un'}equipped`}>
        <Editable className="equipped" onChange={this.handleToggleEquipped} value={equipped} />
        <Editable className="displayName" onChange={this.handleChangeName} value={displayName} />
        <div className={`expanded-toggle icon-${toggleState}`} onClick={this.handleToggleExpanded} />
        {this.state.expanded && <>
          <Editable
            className="description"
            type="multiline"
            onChange={this.handleChangeDescription}
            placeholder="Description..."
            value={description}
          />
          <EffectList expanded model={effects} />
        </>}
      </div>
    )
  }
}

export default Item
