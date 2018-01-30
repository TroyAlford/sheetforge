import React, { Component } from 'react'
import { observer } from 'mobx-react'
import bound from '../utilities/bound'
import AttributeSection from './AttributeSection'
import Character from '../models/Character'
import DescriptorSection from './DescriptorSection'
import Editable from '../components/Editable'
import ArmorSection from './ArmorSection'
import SkillSection from './SkillSection'
import TraitSection from './TraitSection'
import WeaponSection from './WeaponSection'

import '../../fontello/css/axis-sheet-embedded.css'
import './Sheet.scss'

@observer export default class Sheet extends Component {
  constructor(props) {
    super(props)
    this.character = Character.create()

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

  render = () => {
    const c = this.character
    const { portraitHeight, sizeClass = 'large' } = this.state

    return (
      <div className={`sheetforge sheet axis ${sizeClass}`} ref={(self) => { this.container = self }}>
        <header>
          <Editable className="character-name" value={c.name} onChange={c.setName} />
          <div className="xp attribute">
            <span className="caption">XP</span>
            <Editable min={0} value={c.xp} onChange={c.setXP} />
          </div>
          <div className="rp attribute">
            <span className="caption">RP</span>
            <Editable min={0} max={5} value={c.rp} onChange={c.setRP} />
          </div>
          <div className="power attribute">
            <div className="caption">CP</div>
            <Editable value={c.power} readonly />
          </div>
        </header>
        <img
          className="portrait"
          alt="Character Portrait"
          src={c.imageUrl || '//via.placeholder.com/3x4/eeeeee?text=%20'}
          style={{
            height: portraitHeight,
            width: '100%',
          }}
        />
        <DescriptorSection descriptors={c.descriptors} />
        <AttributeSection attributes={c.attributes} modifiers={c.modifiers} />
        <TraitSection traits={c.traits} modifiers={c.modifiers} addTrait={c.addTrait} layout={sizeClass} />
        <SkillSection skills={c.skills} modifiers={c.modifiers} addSkill={c.addSkill} />
        <WeaponSection weapons={c.weapons} addWeapon={c.addWeapon} />
        <ArmorSection armor={c.armor} addArmor={c.addArmor} />
      </div>
    )
  }
}
