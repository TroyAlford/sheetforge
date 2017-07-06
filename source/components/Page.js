import React, { Component } from 'react'

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.displayName = 'Page'
  }
  render() {
    const className = ['sf', this.props.className].filter(Boolean).join(' ')
    return <div className={className}>{this.props.children}</div>
  }
}

Page.defaultProps = {
  className: 'page',
  children: undefined,
}

if (process.NODE_ENV !== 'production') {
  const PropTypes = require('prop-types') // eslint-disable-line global-require
  Page.propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
  }
}
