import React, { Component } from 'react'
import { observer } from 'mobx-react'
import bound from '@/utilities/bound'
import CharacterModel from '@/models/Character'
import AttributeSection from '@/components/AttributeSection'
import DescriptorSection from '@/components/DescriptorSection'
import Editable from '@/components/Editable'
import ArmorSection from '@/components/ArmorSection'
import PortraitSection from '@/components/PortraitSection'
import SkillSection from '@/components/SkillSection'
import TraitSection from '@/components/TraitSection'
import WeaponSection from '@/components/WeaponSection'

import '../../fontello/css/axis-sheet-embedded.css'
import './Sheet.scss'

@observer export default class Sheet extends Component {
  constructor(props) {
    super(props)
    this.character = CharacterModel.create()

    window.addEventListener('resize', this.handleWindowResize)
  }
  state = { sizeClass: 'large' }
  componentDidMount() { this.handleWindowResize() }

  handleWindowResize = () => {
    if (!this.container) return
    const sheetWidth = this.container.offsetWidth
    const sizeIndex = bound(Math.floor(sheetWidth / 250), { min: 1, max: 3 })
    const sizeClass = ['small', 'medium', 'large'][sizeIndex - 1]

    this.setState({ sizeClass })
  }

  bindContainer = (div) => { this.container = div }
  render = () => {
    const c = this.character
    const { sizeClass = 'large' } = this.state

    return (
      <div className={`sheetforge sheet axis ${sizeClass}`} ref={this.bindContainer}>
        <header>
          <Editable className="character-name" value={c.name} onChange={c.setName} />
          <div className="xp attribute">
            <span className="name">XP</span>
            <Editable min={0} value={c.xp} onChange={c.setXP} />
          </div>
          <div className="rp attribute">
            <span className="name">RP</span>
            <Editable min={0} max={5} value={c.rp} onChange={c.setRP} />
          </div>
          <div className="power attribute">
            <div className="name">CP</div>
            <Editable value={c.power} readonly />
          </div>
        </header>
        <PortraitSection url={c.portraitUrl} setter={c.setPortraitUrl} />
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
