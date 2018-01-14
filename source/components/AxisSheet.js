import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AxisCharacter from '../models/AxisCharacter'
import Descriptor from './Descriptor'

import './AxisSheet.scss'

@observer export default class AxisSheet extends Component {
  constructor(props) {
    super(props)
    this.character = new AxisCharacter()

    const onResize = () => {
      const portrait = this.container.querySelector('img.portrait')
      this.setState({
        portraitHeight: Math.round(portrait.width * (4 / 3)),
      })
    }
    // window.addEventListener('resize', debounce(onResize, 250))
    window.addEventListener('resize', onResize)
  }

  state = {
    portraitHeight: 'auto',
  }

  handleDescriptorChange = (descriptor, value) => {
    this.character.descriptors.set(descriptor.toLowerCase(), value)
  }

  render = () => {
    const c = this.character
    const desc = c.descriptors

    return (
      <div className="sheetforge sheet axis" ref={(self) => { this.container = self }}>
        <header>{c.name || 'Unnamed Character'}</header>
        <img
          className="portrait"
          alt="Character Portrait"
          src={c.imageUrl || '//via.placeholder.com/3x4/eeeeee?text=%20'}
          style={{
            height: this.state.portraitHeight,
            width: '100%',
          }}
        />
        <div className="descriptors">
          <div column-1>
            <Descriptor name="Homeland" value={desc.get('homeland')} onChange={this.handleDescriptorChange} />
            <Descriptor name="Race" value={desc.get('race')} onChange={this.handleDescriptorChange} />
            <Descriptor name="Concept" value={desc.get('concept')} onChange={this.handleDescriptorChange} />
          </div>
          <div column-2>
            <Descriptor name="Height" value={desc.get('height')} onChange={this.handleDescriptorChange} />
            <Descriptor name="Weight" value={desc.get('weight')} onChange={this.handleDescriptorChange} />
            <Descriptor name="Gender" value={desc.get('gender')} onChange={this.handleDescriptorChange} />
          </div>
          <div column-3>
            <Descriptor name="Eyes" value={desc.get('eyes')} onChange={this.handleDescriptorChange} />
            <Descriptor name="Hair" value={desc.get('hair')} onChange={this.handleDescriptorChange} />
            <Descriptor name="Age" value={desc.get('age')} onChange={this.handleDescriptorChange} />
          </div>
        </div>
        <div className="attributes">
          <header>Attributes</header>
        </div>
      </div>
    )
  }
}
