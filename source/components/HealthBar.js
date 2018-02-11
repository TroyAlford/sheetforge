import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { TYPES } from '@/models/Health'
import hash from '@/utilities/hash'

import './HealthBar.scss'

@observer export default class HealthBar extends Component {
  handleClick = (event) => { // { target }) => {
    const { health } = this.props
    const index = parseInt(event.target.attributes.index.value, 10)
    const current = TYPES.indexOf(health.levels[index])
    let next = current + 1
    if (event.shiftKey) next = current - 1
    if (event.ctrlKey) next = 0

    if (next > TYPES.length - 1) next = 0
    if (next < 0) next = TYPES.length - 1

    health.setLevel(index + 1, TYPES[next])
  }
  render = () => {
    const { health } = this.props
    const rows = Math.ceil(health.max / 10)
    const cols = rows > 1 ? 10 : health.max
    const style = {
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    }

    return (
      <div className="health-bar">
        <header>Health</header>
        <div className="levels" style={style}>
          {health.levels.map((level, ix) => (
            <div
              className={`${level} icon-health`}
              index={ix}
              key={hash(ix)}
              onClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    )
  }
}
