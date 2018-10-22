import React, { Component, Fragment } from 'react'
import './Expandable.scss'

export default class Expandable extends Component {
  state = {
    expanded: false,
  }

  expander = React.createRef()

  handleToggle = () => {
    const { classList } = this.expander.current.parentElement

    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ expanded: !this.state.expanded }, () => {
      classList.add(this.state.expanded ? 'expandable-wrapper-expanded' : 'expandable-wrapper-collapsed')
      classList.remove(this.state.expanded ? 'expandable-wrapper-collapsed' : 'expandable-wrapper-expanded')
    })
  }

  render() {
    const { children } = this.props
    const toggleState = this.state.expanded ? 'expanded' : 'collapsed'
    const buttonProps = {
      className: `expandable-toggle icon-${toggleState}`,
      onClick: this.handleToggle,
      ref: this.expander,
    }

    return (
      <Fragment>
        <div {...buttonProps} />
        {this.state.expanded && <div className="expandable">{children}</div>}
      </Fragment>
    )
  }
}
