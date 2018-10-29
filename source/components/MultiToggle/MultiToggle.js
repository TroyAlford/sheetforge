import React, { Component } from 'react'
import noop from '@/utilities/noop'
import './MultiToggle.scss'

export default class MultiToggle extends Component {
  static defaultProps = {
    className: '',
    onChange: noop,
    options: [],
  }

  state = { selected: null }

  handleOptionClick = ({ target }) => {
    const index = [...target.parentElement.children].indexOf(target)
    const selected = this.props.options[index]
    this.setState({ selected }, () => this.props.onChange(selected))
  }

  render() {
    const { className, options } = this.props
    const { selected } = this.state

    return (
      <div className={`multi-toggle ${className}`.trim()}>
        {options.map(option => (
          <div
            className={`toggle ${option === selected ? 'selected' : ''}`.trim()}
            onClick={this.handleOptionClick}
          >
            {option.display}
          </div>
        ))}
      </div>
    )
  }
}
