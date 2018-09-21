import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'

import './Spell.scss'

@observer export default class Spell extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  }

  render() {
    const { editing, onEditStart, onEditEnd, spell } = this.props

    return (
      <div className="spell">
        <Editable
          className="name"
          forceEditMode={editing}
          onChange={spell.setName}
          onEditStart={onEditStart}
          onEditEnd={onEditEnd}
          value={spell.name}
        />
        <Editable
          className="level"
          max={9}
          min={0}
          type="number"
          onChange={spell.setLevel}
          value={spell.level || '-'}
        />
      </div>
    )
  }
}
