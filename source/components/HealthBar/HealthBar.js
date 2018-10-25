import { observer } from 'mobx-react'
import React, { Component } from 'react'
import HealthLevel from '@/components/HealthBar/HealthLevel'
import ListOf from '@/components/List'
import HealthLevelModel from '@/models/HealthLevel'
import './HealthBar.scss'

const HealthLevelList = ListOf(HealthLevelModel, HealthLevel, {
  prepend: true,
})

@observer class HealthBar extends Component {
  static defaultProps = {
    model: [],
    title: '',
    vertical: false,
  }

  render() {
    const { model, size, title, vertical } = this.props
    const current = model.filter(level => level.damage === 'none').length
    const worstInjury = [...model.slice().reverse()].find(level => level.damage !== 'none')

    let direction = (vertical || size === 'small') ? 'vertical' : 'horizontal'
    if (window.matchMedia('(max-width: 5in)').matches) direction = 'vertical'

    const classNames = ['health-bar', direction].filter(Boolean).join(' ')
    const titleText = <>
      {title || 'Health'} {current}/{model.length}
      {Boolean(worstInjury) && (
        <div className="wound-level">({worstInjury.name}: {worstInjury.penalty})</div>
      )}
    </>

    return (
      <div className={classNames}>
        <HealthLevelList collection={model} title={titleText} />
      </div>
    )
  }
}

export default HealthBar
