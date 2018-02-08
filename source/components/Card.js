import React, { Component } from 'react'
import { observer } from 'mobx-react'
import noop from '@/utilities/noop'

import './Card.scss'

@observer export default class Card extends Component {
  static defaultProps = {
    renderAlways: noop,
    renderCollapsed: noop,
    renderExpanded: noop,
  }
  state = { expanded: false }

  toggleExpanded = () => { this.setState({ expanded: !this.state.expanded }) }

  render = () => {
    const { className, contentsClassName } = this.props
    const { renderAlways, renderCollapsed, renderExpanded } = this.props
    const expandedClassName = this.state.expanded ? 'expanded' : 'collapsed'

    return (
      <div className={`card ${expandedClassName} ${className || ''}`.trim()}>
        <div className={`expander icon-${expandedClassName}`} onClick={this.toggleExpanded} />
        <div className={`card-contents ${contentsClassName || ''}`.trim()}>
          {renderAlways()}
          {this.state.expanded ? renderExpanded() : renderCollapsed()}
        </div>
      </div>
    )
  }
}
