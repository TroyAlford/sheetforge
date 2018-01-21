import React, { Component } from 'react'
import Attribute from './Attribute'

import './AttributeSection.scss'

export default class AttributeSection extends Component {
  renderAttribute = name => (
    <Attribute
      attributes={this.props.attributes}
      className={name}
      modifier={this.props.modifiers.get(name)}
      name={name}
    />
  )
  renderComputed = (name, { caption, className = '' } = {}) => (
    <Attribute
      attributes={this.props.attributes}
      caption={caption}
      className={`${name} ${className}`.replace(/ {2}/g, '')}
      computed
      modifier={this.props.modifiers.get(name)}
      name={name}
    />
  )

  render = () => (
    <div className="attributes">
      <header>Attributes</header>

      {this.renderComputed('potency', { className: 'header highlight' })}
      {this.renderComputed('reflex', { className: 'header highlight' })}
      {this.renderComputed('resilience', { className: 'header highlight' })}

      {this.renderComputed('body', { className: 'header highlight' })}
      {this.renderAttribute('strength')}
      {this.renderAttribute('agility')}
      {this.renderAttribute('fitness')}

      {this.renderComputed('mind', { className: 'header highlight' })}
      {this.renderAttribute('intellect')}
      {this.renderAttribute('acuity')}
      {this.renderAttribute('focus')}

      {this.renderComputed('spirit', { className: 'header highlight' })}
      {this.renderAttribute('confidence')}
      {this.renderAttribute('intuition')}
      {this.renderAttribute('devotion')}

      <hr className="divider-1" />

      <Attribute caption="Racial" className="racial header highlight" />
      {this.renderAttribute('size')}
      {this.renderComputed('speed')}
      {this.renderAttribute('naturalArmor')}

      <Attribute caption="Combat" className="combat header highlight" />
      {this.renderComputed('accuracy')}
      {this.renderComputed('might')}
      {this.renderComputed('toughness')}

      <hr className="divider-2" />

      <Attribute caption="Damage" className="thresholds header highlight" />
      {this.renderComputed('damageThresholdLight', { caption: 'Light', className: 'light' })}
      {this.renderComputed('damageThresholdDeep', { caption: 'Deep', className: 'deep' })}
      {this.renderComputed('damageThresholdDeath', { caption: 'Death', className: 'death' })}
    </div>
  )
}
