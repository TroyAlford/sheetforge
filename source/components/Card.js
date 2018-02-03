import React, { Component } from 'react'
import { observer } from 'mobx-react'

import './Card.scss'

const renderEmpty = () => { }

@observer export default class Card extends Component {
  static defaultProps = {
    renderCollapsed: renderEmpty,
    renderExpanded: renderEmpty,
  }
  state = { expanded: false }

  toggleExpanded = () => { this.setState({ expanded: !this.state.expanded }) }

  render = () => {
    const { className, contentsClassName } = this.props
    const expandedClassName = this.state.expanded ? 'expanded' : 'collapsed'

    return (
      <div className={`card ${expandedClassName} ${className || ''}`.trim()}>
        <div className={`expander icon-${expandedClassName}`} onClick={this.toggleExpanded} />
        <div className={`card-contents ${contentsClassName || ''}`.trim()}>
          {this.props.children}
          {this.state.expanded || this.props.renderCollapsed()}
          {this.state.expanded && this.props.renderExpanded()}
        </div>
      </div>
    )
  }
}
