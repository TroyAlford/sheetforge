import { observer } from 'mobx-react'
import PropTypes from 'prop-types' // eslint-disable-line
import React, { Component } from 'react'
import Expandable from '@/components/Expandable'
import HealthLevel from '@/components/HealthBar/Healthlevel'
import ListOf from '@/components/List'
import CollectionOf from '@/models/generic/Collection'
import HealthLevelModel from '@/models/HealthLevel'
import modelPropType from '@/utilities/prop-types/model'
import './HealthBar.scss'

const HealthLevelList = ListOf(HealthLevelModel, HealthLevel, {
  prepend: true,
})

@observer class HealthBar extends Component {
  static defaultProps = {
    horizontal: true,
    model: [],
    vertical: false,
  }

  static propTypes = {
    horizontal: PropTypes.bool,
    model: modelPropType(CollectionOf(HealthLevelModel)),
    vertical: PropTypes.bool,
  }

  handleHeal = () => {
    const injury = [...this.props.model.slice().reverse()].find(level => level.damage !== 'none')
    if (injury) injury.apply('none')
  }

  handleHarm = () => {
    const healthy = [...this.props.model.asArray].find(level => level.damage === 'none')
    if (healthy) healthy.apply('heavy')
  }

  render() {
    const { horizontal, model, vertical } = this.props
    const current = model.filter(level => level.damage === 'none').length
    const worstInjury = [...model.slice().reverse()].find(level => level.damage !== 'none')
    const classNames = [
      'health-bar',
      horizontal && !vertical && 'horizontal',
      vertical && 'vertical',
    ].filter(Boolean).join(' ')

    return (
      <div className={classNames}>
        <div className="summary">
          <b>Health</b>:&nbsp;{current} of {model.length} {worstInjury && `(${worstInjury.name})`}
        </div>
        {worstInjury && <div className="penalty">Penalty: {worstInjury.penalty}</div>}
        <button onClick={this.handleHarm}> - </button>
        <button onClick={this.handleHeal}> + </button>
        <Expandable>
          <HealthLevelList collection={model} />
        </Expandable>
      </div>
    )
  }
}

export default HealthBar
