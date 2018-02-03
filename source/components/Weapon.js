import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'

@observer export default class Weapon extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  }

  render() {
    const { editing, onEditStart, onEditEnd, weapon } = this.props

    return (
      <div className="weapon">
        <Editable
          className="equipped"
          onChange={weapon.setEquipped}
          type="boolean"
          value={weapon.equipped}
        />
        <Editable
          className="name"
          forceEditMode={editing}
          onChange={weapon.setName}
          onEditStart={onEditStart}
          onEditEnd={onEditEnd}
          value={weapon.name}
        />
        <Editable
          className="damage"
          min={0}
          type="number"
          onChange={weapon.setDamage}
          value={weapon.damage}
        />
        <Editable
          className="range"
          min={0}
          type="number"
          onChange={weapon.setRange}
          value={weapon.range}
        />
        <Editable
          className="accuracy"
          type="number"
          onChange={weapon.setAccuracy}
          value={weapon.accuracy}
        />
      </div>
    )
  }
}
