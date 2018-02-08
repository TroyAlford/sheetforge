import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { renderEditable } from '@/utilities/itemRendering'
import Card from '@/components/Card'
import EquippableModel from '@/models/Equippable'
import noop from '@/utilities/noop'

import './Item.scss'

@observer export default class Item extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  };

  renderAlways = () => {
    const { editing, onEditStart, onEditEnd, item } = this.props
    return (
      <Fragment>
        {renderEditable(item, 'Equipped', { type: 'boolean' })}
        {renderEditable(item, 'Name', { className: 'icon-backpack', forceEditMode: editing, onEditEnd, onEditStart })}
      </Fragment>
    )
  }
  renderExpanded = () => {
    const { item } = this.props
    const placeholder = item.description || 'Description'
    return renderEditable(item, 'Description', { placeholder })
  }

  render = () => (
    <Card
      className="item-card"
      contentsClassName="item"
      renderAlways={this.renderAlways}
      renderExpanded={this.renderExpanded}
    />
  )
}
