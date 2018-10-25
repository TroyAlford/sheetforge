import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import './HealthLevel.scss'

@observer class HealthLevel extends Component {
  handleChangeName = name => this.props.model.set({ name })

  handleChangePenalty = penalty => this.props.model.set({ penalty })

  handleClick = (event) => {
    const healing = event.ctrlKey
    const healthLevel = this.props.model

    if (healthLevel.damage === 'bane' && event.type === 'tap') {
      // Allow finger-clicks to heal bane damage
      healthLevel.set({ damage: 'none' })
    } else {
      healthLevel.adjust(healing ? -1 : 1)
    }
  }

  render() {
    const { damage, name, penalty } = this.props.model
    const title = damage === 'none' ? 'healthy' : `${damage} damage`

    return (
      <div className={`health-level ${damage}`}>
        <div className="damage" onClick={this.handleClick} title={title} />
        <Editable className="name" onChange={this.handleChangeName} value={name} />
        <Editable className="penalty" onChange={this.handleChangePenalty} value={penalty} />
      </div>
    )
  }
}

export default HealthLevel
