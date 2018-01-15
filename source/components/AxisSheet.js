import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Attribute from './Attribute'
import AxisAttributes from './AxisAttributes'
import AxisCharacter from '../models/AxisCharacter'
import AxisDescriptors from './AxisDescriptors'
import Editable from './Editable'
import bound from '../utilities/bound'

import './AxisSheet.scss'

@observer export default class AxisSheet extends Component {
  constructor(props) {
    super(props)
    this.character = new AxisCharacter()

    window.addEventListener('resize', this.handleWindowResize)
  }

  state = {
    portraitHeight: 'auto',
  }

  componentDidMount() {
    this.handleWindowResize()
  }

  handleWindowResize = () => {
    if (!this.container) return
    const sheetWidth = this.container.offsetWidth
    const sizeIndex = bound(Math.floor(sheetWidth / 250), { min: 1, max: 3 })
    const sizeClass = ['small', 'medium', 'large'][sizeIndex - 1]

    const portrait = this.container.querySelector('img.portrait')
    const portraitHeight = Math.round(portrait.offsetWidth * (4 / 3))

    this.setState({ portraitHeight, sizeClass })
  }

  handleAttributeChange = (attribute, value) => {
    this.character[attribute] = value
  }
  handleDescriptorChange = (descriptor, value) => {
    this.character.descriptors.set(descriptor.toLowerCase(), value)
  }
  handleNameChange = (value) => {
    this.character.name = value
  }

  render = () => {
    const { portraitHeight, sizeClass = 'large' } = this.state
    const { character } = this

    return (
      <div className={`sheetforge sheet axis ${sizeClass}`} ref={(self) => { this.container = self }}>
        <header>
          <Editable className="character-name" value={character.name} onChange={this.handleNameChange} />
          <Attribute caption="XP" character={character} name="xp" min={0} max={Infinity} />
          <Attribute caption="RP" character={character} name="rp" min={0} max={Infinity} />
          <Attribute caption="CP" character={character} name="power" computed />
        </header>
        <img
          className="portrait"
          alt="Character Portrait"
          src={character.imageUrl || '//via.placeholder.com/3x4/eeeeee?text=%20'}
          style={{
            height: portraitHeight,
            width: '100%',
          }}
        />
        <AxisDescriptors character={character} />
        <AxisAttributes character={character} />
      </div>
    )
  }
}
