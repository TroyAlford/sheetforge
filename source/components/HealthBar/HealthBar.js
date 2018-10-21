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
    model: [],
    title: '',
    vertical: false,
  }

  static propTypes = {
    model: modelPropType(CollectionOf(HealthLevelModel)),
    title: PropTypes.string,
    vertical: PropTypes.bool,
  }

  render() {
    const { model, title, vertical } = this.props
    const current = model.filter(level => level.damage === 'none').length
    const worstInjury = [...model.slice().reverse()].find(level => level.damage !== 'none')

    let direction = vertical ? 'vertical' : 'horizontal'
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
