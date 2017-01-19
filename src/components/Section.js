import React from 'react'
import Base from './Base'

export default class Section extends Base {
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

    return (
      <div className={this.classString}>
        {this.props.title && <div className="title">{this.props.title}</div>}
        {headers.length !== 0 && <div className="header">{headers}</div>}
        {this.props.children}
      </div>
    )
  }
}

Section.propTypes = {
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.arrayOf(React.PropTypes.string),
  ]),
  headers: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ])).isRequired,
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
  ]),
}
Section.defaultProps = {
  headers: [],
  title: '',
}
