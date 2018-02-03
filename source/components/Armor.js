import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'

@observer export default class Armor extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  }

  render() {
    const { editing, onEditStart, onEditEnd, armor } = this.props

    return (
      <div className="armor">
        <Editable
          className="equipped"
          onChange={armor.setEquipped}
          type="boolean"
          value={armor.equipped}
        />
        <Editable
          className="name"
          forceEditMode={editing}
          onChange={armor.setName}
          onEditStart={onEditStart}
          onEditEnd={onEditEnd}
          value={armor.name}
        />
        <Editable
          className="head"
          type="number"
          min={0}
          onChange={armor.setHead}
          value={armor.head}
        />
        <Editable
          className="arms"
          type="number"
          min={0}
          onChange={armor.setArms}
          value={armor.arms}
        />
        <Editable
          className="torso"
          type="number"
          min={0}
          onChange={armor.setTorso}
          value={armor.torso}
        />
        <Editable
          className="hands"
          type="number"
          min={0}
          onChange={armor.setHands}
          value={armor.hands}
        />
        <Editable
          className="legs"
          type="number"
          min={0}
          onChange={armor.setLegs}
          value={armor.legs}
        />
        <Editable
          className="feet"
          type="number"
          min={0}
          onChange={armor.setFeet}
          value={armor.feet}
        />
        <Editable
          className="average"
          type="number"
          readonly
          value={armor.average}
        />
      </div>
    )
  }
}
