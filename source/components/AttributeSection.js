import React, { Component } from 'react'
import Attribute from '@/components/Attribute'

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
  renderHeader = (id, name) => (
    <div className={`attribute ${id} header highlight`}>
      <span className="name">{name}</span>
    </div>
  )

  render = () => (
    <div className="attributes section">
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

      <hr className="divider" />

      {this.renderHeader('racial', 'Racial')}
      {this.renderAttribute('size')}
      {this.renderComputed('speed')}
      {this.renderAttribute('naturalArmor')}
    </div>
  )
}
