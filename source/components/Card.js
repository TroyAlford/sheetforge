import React, { Component } from 'react'

import './Card.scss'

const renderEmpty = () => { }

export default class Card extends Component {
  static defaultProps = {
    renderCollapsed: renderEmpty,
    renderExpanded: renderEmpty,
  }
  state = { expanded: false }

  toggleExpanded = () => { this.setState({ expanded: !this.state.expanded }) }

  render = () => {
    const expandedClassName = this.state.expanded ? 'expanded' : 'collapsed'

    return (
      <div className={`card ${expandedClassName}`}>
        <div className={`expander icon-${expandedClassName}`} onClick={this.toggleExpanded} />
        <div className="card-contents">
          {this.props.children}
          {this.state.expanded || this.props.renderCollapsed()}
          {this.state.expanded && this.props.renderExpanded()}
        </div>
      </div>
    )
  }
}
