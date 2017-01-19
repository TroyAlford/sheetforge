import React from 'react'
import autoBind from 'react-autobind'
import { uniq } from 'lodash'

export default class Base extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  get classString() {
    return this.classes.join(' ')
  }
  get classes() {
    const fromState = this.state && Array.isArray(this.state.classes) && this.state.classes || []

    return uniq([
      'sheetforge',
      this.constructor.name.toLowerCase(),
      this.props.className || '',
      ...this.props.classes || [],
      ...fromState.filter(c => typeof c === 'string'),
    ]).filter(c => !!c)
  }

  render() {
    return (
      <div className={this.classString}>
        {this.props.children}
      </div>
    )
  }
}

Base.defaultProps = {
  classes: [],
  className: '',
}
Base.propTypes = {
  classes: React.PropTypes.arrayOf(React.PropTypes.string),
  className: React.PropTypes.string,
}
