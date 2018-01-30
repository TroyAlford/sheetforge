import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '../components/Editable'
import noop from '../utilities/noop'

@observer export default class Trait extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  }

  render() {
    const { editing, onEditStart, onEditEnd, trait } = this.props

    return (
      <div className="trait">
        <Editable
          className="name"
          forceEditMode={editing}
          onChange={trait.setName}
          onEditStart={onEditStart}
          onEditEnd={onEditEnd}
          value={trait.name}
        />
        <Editable
          className="value"
          type="number"
          onChange={trait.setValue}
          value={trait.value || ''}
        />
      </div>
    )
  }
}
