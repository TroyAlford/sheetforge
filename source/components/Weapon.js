import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { renderEditable } from '@/utilities/itemRendering'
import Card from '@/components/Card'

import './Weapon.scss'

@observer export default class Weapon extends Component {
  renderAlways = () => {
    const { editing, item, onEditEnd, onEditStart } = this.props
    return (
      <Fragment>
        {renderEditable(item, 'Equipped', { type: 'boolean' })}
        {renderEditable(item, 'Name', { className: 'icon-weapon', forceEditMode: editing, onEditEnd, onEditStart })}
        {renderEditable(item, 'Damage', { type: 'number', caption: <abbr title="Damage">Dmg:</abbr> })}
        {renderEditable(item, 'Range', { type: 'number', caption: <abbr title="Range">Rng:</abbr> })}
        {renderEditable(item, 'Accuracy', { type: 'number', caption: <abbr title="Accuracy">Acc:</abbr> })}
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
      className="item-card weapon-card"
      contentsClassName="item weapon"
      renderAlways={this.renderAlways}
      renderExpanded={this.renderExpanded}
    />
  )
}
