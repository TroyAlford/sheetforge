import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import Card from '@/components/Card'
import LabeledEditable from '@/components/LabeledEditable'
import noop from '@/utilities/noop'

import './Armor.scss'

@observer export default class Armor extends Component {
  static defaultProps = {
    onEditStart: noop,
    onEditEnd: noop,
  }

  renderEditable = (propName, props) => {
    const loweredPropName = propName.toLowerCase()
    return (
      <LabeledEditable
        caption={props.caption || <i className={`icon-${loweredPropName}`} />}
        className={loweredPropName}
        onChange={this.props.armor[`set${propName}`]}
        value={this.props.armor[loweredPropName]}
        {...props}
      />
    )
  }

  renderPropWithIcon = propName => this.renderEditable(propName, {
    caption: <abbr className={`icon-${propName.toLowerCase()}`} title={propName} />,
    min: 0,
    type: 'number',
  })
  renderExpandedChildren = () => (
    <Fragment>
      {this.renderEditable('Description', { placeholder: 'Description' })}
      {this.renderEditable('Worth', { caption: <abbr className="icon-currency" title="Value" /> })}
      <div className="armor-values">
        {this.renderPropWithIcon('Head')}
        {this.renderPropWithIcon('Arms')}
        {this.renderPropWithIcon('Torso')}
        {this.renderPropWithIcon('Hands')}
        {this.renderPropWithIcon('Legs')}
        {this.renderPropWithIcon('Feet')}
      </div>
    </Fragment>
  )

  render() {
    const { editing, onEditStart, onEditEnd } = this.props
    const cardProps = { className: 'armor-card', contentsClassName: 'item armor' }
    return (
      <Card {...cardProps} renderExpanded={this.renderExpandedChildren}>
        {this.renderEditable('Equipped', { type: 'boolean' })}
        {this.renderEditable('Name', { forceEditMode: editing, onEditEnd, onEditStart })}
        {this.renderEditable('Average', {
          caption: <abbr className="icon-torso" title="Average" />,
          onChange: this.props.armor.setAll,
        })}
      </Card>
    )
  }
}
