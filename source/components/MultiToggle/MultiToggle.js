import React, { Component } from 'react'
import noop from '@/utilities/noop'
import './MultiToggle.scss'

export default class MultiToggle extends Component {
  static defaultProps = {
    className: '',
    onChange: noop,
    options: [],
    selected: undefined,
  }

  state = { selected: null }

  handleOptionClick = ({ target }) => {
    const index = [...target.parentElement.children].indexOf(target)
    const selected = this.props.options[index]

    if (this.props.selected !== undefined) {
      this.props.onChange(selected)
    } else {
      this.setState({ selected })
    }
  }

  render() {
    const { className, options } = this.props
    const selected = this.props.selected !== undefined
      ? this.props.selected
      : this.state.selected

    return (
      <div className={`multi-toggle ${className}`.trim()}>
        {options.map((option, key) => (
          <div
            className={`toggle ${option === selected ? 'on' : 'off'}`.trim()}
            key={key}
            onClick={this.handleOptionClick}
          >
            {option.display}
          </div>
        ))}
      </div>
    )
  }
}
