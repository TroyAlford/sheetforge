import React, { Component, Fragment } from 'react'
import './Expandable.scss'

export default class Expandable extends Component {
  state = {
    expanded: false,
  }

  // eslint-disable-next-line react/no-access-state-in-setstate
  handleToggle = () => this.setState({ expanded: !this.state.expanded })

  render() {
    const { children } = this.props
    const toggleState = this.state.expanded ? 'expanded' : 'collapsed'

    return (
      <Fragment>
        <div className={`expandable-toggle icon-${toggleState}`} onClick={this.handleToggle} />
        {this.state.expanded && <div className="expandable">{children}</div>}
      </Fragment>
    )
  }
}
