import React, { Component } from 'react'
import { observer } from 'mobx-react'
import hash from '../utilities/hash'
import Descriptor from '../components/Descriptor'

import './DescriptorSection.scss'

const DISPLAY_ORDER = [
  'homeland', 'race', 'concept',
  'height', 'weight', 'gender',
  'eyes', 'hair', 'age',
]

@observer export default class DescriptorSection extends Component {
  handleChange = (name, value) => {
    this.props.descriptors.set(name, value)
  }

  render = () => (
    <div className="descriptors section">
      <header>Descriptors</header>
      {DISPLAY_ORDER.map(name => (
        <Descriptor
          key={hash(name)}
          name={name}
          value={this.props.descriptors.get(name)}
          onChange={this.handleChange}
        />
      ))}
    </div>
  )
}
