import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
  render() {
    const className = ['sf', this.props.className].filter(Boolean).join(' ')

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

Page.defaultProps = {
  className: 'page',
}

Page.propTypes = {
  className: PropTypes.string,
}
