import React, { Component } from 'react'
import Attribute from './Attribute'

import './AttributeSection.scss'

export default class AttributeSection extends Component {
  renderAttribute = (id) => {
    const attr = this.props.attributes.find(a => a.id === id)
    return <Attribute model={attr} className={id} />
  }
  renderComputed = (id, className = '') => {
    const attr = this.props.attributes.find(a => a.id === id)
    return <Attribute model={attr} className={`${id} ${className} computed`} computed />
  }

  render = () => (
    <div className="attributes">
      <header>Attributes</header>

      {this.renderComputed('potency', 'header highlight')}
      {this.renderComputed('reflex', 'header highlight')}
      {this.renderComputed('resilience', 'header highlight')}

      {this.renderComputed('body', 'header highlight')}
      {this.renderAttribute('strength')}
      {this.renderAttribute('agility')}
      {this.renderAttribute('fitness')}

      {this.renderComputed('mind', 'header highlight')}
      {this.renderAttribute('intellect')}
      {this.renderAttribute('acuity')}
      {this.renderAttribute('focus')}

      {this.renderComputed('spirit', 'header highlight')}
      {this.renderAttribute('confidence')}
      {this.renderAttribute('intuition')}
      {this.renderAttribute('devotion')}

      <hr className="divider-1" />

      <Attribute model={{ id: 'racial', name: 'Racial' }} className="header highlight" />
      {this.renderAttribute('size')}
      {this.renderComputed('speed')}
      {this.renderAttribute('naturalArmor')}

      <Attribute model={{ id: 'combat', name: 'Combat' }} className="header highlight" />
      {this.renderComputed('accuracy')}
      {this.renderComputed('might')}
      {this.renderComputed('toughness')}

      <hr className="divider-2" />

      <Attribute model={{ id: 'thresholds', name: 'Damage' }} className="header highlight" />
      {this.renderComputed('damageThresholdLight', 'light')}
      {this.renderComputed('damageThresholdDeep', 'deep')}
      {this.renderComputed('damageThresholdDeath', 'death')}
    </div>
  )
}
