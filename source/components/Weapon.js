import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'

import './Weapon.scss'

@observer export default class Weapon extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  }

  renderEditable = (propName, props) => (
    <Editable
      className={propName.toLowerCase()}
      onChange={this.props.weapon[`set${propName}`]}
      value={this.props.weapon[propName.toLowerCase()]}
      {...props}
    />
  )

  render() {
    const { editing, onEditStart, onEditEnd, weapon } = this.props
    const placeholder = weapon.description || 'Description'

    return (
      <div className="item weapon">
        {this.renderEditable('Equipped', { type: 'boolean' })}
        {this.renderEditable('Name', { forceEditMode: editing, onEditEnd, onEditStart })}
        {this.renderEditable('Damage', { type: 'number' })}
        {this.renderEditable('Range', { type: 'number' })}
        {this.renderEditable('Accuracy', { type: 'number' })}
        {this.renderEditable('Description', { placeholder })}
      </div>
    )
  }
}
