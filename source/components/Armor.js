import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { renderEditable } from '@/utilities/itemRendering'
import { noop } from '@/utilities/noop'
import Card from '@/components/Card'

import './Armor.scss'

@observer export default class Armor extends Component {
  static defaultProps = {
    item: {},
    onEditStart: noop,
    onEditEnd: noop,
  }

  renderAlways = () => {
    const { item, editing, onEditEnd, onEditStart } = this.props
    return (
      <Fragment>
        {renderEditable(item, 'Equipped', { type: 'boolean' })}
        {renderEditable(item, 'Name', { forceEditMode: editing, onEditEnd, onEditStart })}
        {renderEditable(item, 'Rating', { type: 'number', caption: 'Armor Rating:' })}
      </Fragment>
    )
  }

  renderExpanded = () => {
    const { item } = this.props
    return (
      <Fragment>
        {renderEditable(item, 'Description', { placeholder: 'Description' })}
      </Fragment>
    )
  }

  render = () => (
    <Card
      className="armor-card"
      contentsClassName="item armor"
      renderAlways={this.renderAlways}
      renderExpanded={this.renderExpanded}
    />
  )
}
