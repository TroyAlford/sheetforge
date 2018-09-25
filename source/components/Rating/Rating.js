import PropTypes from 'prop-types' // eslint-disable-line
import React, { Component } from 'react'
import noop from '@/utilities/noop'
import range from '@/utilities/range'
import './Rating.scss'

export default class Rating extends Component {
  static defaultProps = {
    current: 0,
    iconOff: <span className="dot" />,
    iconOn: <span className="dot filled" />,
    maximum: 5,
    onChange: noop,
  }

  static propTypes = {
    current: PropTypes.number,
    iconOff: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    iconOn: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    maximum: PropTypes.number,
    onChange: PropTypes.func,
  }

  handleIconClick = (event) => {
    const number = parseInt(event.target.getAttribute('data-number'), 10)
    this.props.onChange(number === this.props.current ? number - 1 : number)
  }

  render = () => {
    const { current, iconOff, iconOn, maximum } = this.props
    return (
      <div className="rating">
        {range(1, maximum).map(number => (
          <span key={number} data-number={number} onClick={this.handleIconClick} title={number}>
            {number <= current ? iconOn : iconOff}
          </span>
        ))}
      </div>
    )
  }
}
