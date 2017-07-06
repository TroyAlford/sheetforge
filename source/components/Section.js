import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: [typeof props.title === 'string' && props.title || '']
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      classes: [typeof props.title === 'string' && props.title || '']
    })
  }

  render() {
    const headers = this.props.headers.map((header, index) => {
      const title = typeof header === 'string' ? header : ''
      const classes = [title, 'heading']

      return (
        <div key={index} className={classes.join(' ')}>
          {header}
        </div>
      )
    })

    const className = ['sf', this.props.className].filter(Boolean).join(' ')

    return (
      <div className={className}>
        {this.props.title && <div className="title">{this.props.title}</div>}
        {headers.length !== 0 && <div className="header">{headers}</div>}
        {this.props.children}
      </div>
    )
  }
}

Section.defaultProps = {
  className: 'section',
  headers: [],
  title: '',
}

Section.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ])).isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}
