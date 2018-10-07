import { observer } from 'mobx-react'
import { types } from 'mobx-state-tree'
import PropTypes from 'prop-types' // eslint-disable-line
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import HealthLevel from '@/models/HealthLevel/HealthLevel'
import modelPropType from '@/utilities/prop-types/model'
import './HealthBar.scss'

@observer class HealthBar extends Component {
  static defaultProps = {
    horizontal: true,
    model: [],
    vertical: false,
  }

  static propTypes = {
    horizontal: PropTypes.bool,
    model: modelPropType(types.array(HealthLevel)),
    vertical: PropTypes.bool,
  }

  handleHealthLevelClick = (event, healthLevel) => {
    const healing = event.ctrlKey

    if (healthLevel.damage === 'bane' && event.type === 'tap') {
      // Allow finger-clicks to heal bane damage
      healthLevel.set({ damage: 'none' })
    } else {
      healthLevel.adjust(healing ? -1 : 1)
    }
  }

  render() {
    const { horizontal, model, vertical } = this.props
    const classNames = [
      'health-bar',
      horizontal && !vertical && 'horizontal',
      vertical && 'vertical',
    ].filter(Boolean).join(' ')

    return (
      <div className={classNames}>
        {model.map((level, index) => (
          <div key={index} className={`health-level ${level.damage}`}>
            <div
              className="damage"
              onClick={e => this.handleHealthLevelClick(e, level)}
              title={level.damage === 'none' ? 'healthy' : `${level.damage} damage`}
            />
            <Editable
              className="name"
              onChange={name => level.set({ name })}
              value={level.name}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default HealthBar
