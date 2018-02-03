import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'

@observer export default class Skill extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  }

  render() {
    const { editing, onEditStart, onEditEnd, skill } = this.props

    return (
      <div className="skill">
        <Editable
          className="name"
          forceEditMode={editing}
          onChange={skill.setName}
          onEditStart={onEditStart}
          onEditEnd={onEditEnd}
          value={skill.name}
        />
        <Editable
          className="theory"
          max={10}
          min={0}
          type="number"
          onChange={skill.setTheory}
          value={skill.theory || ''}
        />
        <Editable
          className="mastery"
          max={10}
          min={0}
          type="number"
          onChange={skill.setMastery}
          value={skill.mastery || ''}
        />
      </div>
    )
  }
}
