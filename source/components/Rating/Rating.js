import React, { Component } from 'react'
import math from '@/utilities/math'
import noop from '@/utilities/noop'
import range from '@/utilities/range'
import './Rating.scss'

export default class Rating extends Component {
  static defaultProps = {
    allowExcess: false,
    current: 0,
    iconExcess: <span className="dot excess icon-add" />,
    iconOff: <span className="dot empty" />,
    iconOn: <span className="dot filled" />,
    maximum: 5,
    onChange: noop,
  }

  handleIconClick = (event) => {
    const number = parseInt(event.target.getAttribute('data-number'), 10)
    this.props.onChange(number === this.props.current ? number - 1 : number)
  }

  render = () => {
    const { allowExcess, current, iconExcess, iconOff, iconOn, maximum } = this.props
    const total = allowExcess ? math.max(current, maximum) : maximum

    return (
      <div className="rating">
        {range(1, total).map(number => (
          <span data-number={number} key={number} onClick={this.handleIconClick} title={number}>
            {(number <= current && number <= maximum) && iconOn}
            {(number > current && number <= maximum) && iconOff}
            {(number > maximum) && iconExcess}
          </span>
        ))}
      </div>
    )
  }
}
