import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import noop from '@/utilities/noop'
import './Expandable.scss'

export default class Expandable extends Component {
  static defaultProps = {
    expandByDefault: false,
    omitItemWrapper: false,
    onToggle: noop,
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
  componentDidMount() {
    this.expander.current.parentElement.classList.add('expandable-wrapper')
  }

  handleToggle = () => {
    const { classList } = this.expander.current.parentElement
    const { expanded } = this.state

    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ expanded: !expanded }, () => {
      this.props.onToggle(!expanded)
      classList[!expanded ? 'add' : 'remove']('expanded')
    })
  }

  renderExpanded = () => {
    const { children, omitItemWrapper } = this.props
    return omitItemWrapper
      ? children
      : <div className="expandable"> {children}</div>
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
