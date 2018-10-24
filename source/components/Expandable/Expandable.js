import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import './Expandable.scss'

export default class Expandable extends Component {
  static defaultProps = {
    expandByDefault: false,
    omitItemWrapper: false,
    toggleButtonParent: null,
    toggleButtonText: '',
  }

  state = {
    expanded: false,
  }

  expander = React.createRef()

  componentWillMount() {
    this.setState({ expanded: this.props.expandByDefault })
  }

  handleToggle = () => {
    const { classList } = this.expander.current.parentElement

    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ expanded: !this.state.expanded }, () => {
      classList.add(this.state.expanded ? 'expandable-wrapper-expanded' : 'expandable-wrapper-collapsed')
      classList.remove(this.state.expanded ? 'expandable-wrapper-collapsed' : 'expandable-wrapper-expanded')
    })
  }

  renderExpanded = () => {
    const { children, omitItemWrapper } = this.props
    return omitItemWrapper
      ? children
      : <div className="expandable"> { children }</div>
  }

  render() {
    const { toggleButtonParent, toggleButtonText } = this.props
    const toggleState = this.state.expanded ? 'expanded' : 'collapsed'
    const buttonProps = {
      className: `expandable-toggle icon-${toggleState}`,
      onClick: this.handleToggle,
      ref: this.expander,
    }

    const toggleButton = <div {...buttonProps} text={toggleButtonText} />
    return (
      <Fragment>
        {toggleButtonParent ? createPortal(toggleButton, toggleButtonParent) : toggleButton}
        {this.state.expanded && this.renderExpanded()}
      </Fragment>
    )
  }
}
