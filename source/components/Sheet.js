import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import bound from '@/utilities/bound'
import noop from '@/utilities/noop'
import CharacterModel from '@/models/Character'
import AttributeSection from '@/components/AttributeSection'
import DescriptorSection from '@/components/DescriptorSection'
import Editable from '@/components/Editable'
import EquipmentSection from '@/components/EquipmentSection'
import HealthBar from '@/components/HealthBar'
import PortraitSection from '@/components/PortraitSection'
import SkillSection from '@/components/SkillSection'
import SpellSection from '@/components/SpellSection'
import TraitSection from '@/components/TraitSection'

import '../../fontello/css/axis-sheet-embedded.css'
import './Sheet.scss'

@observer export default class Sheet extends Component {
  static displayName = 'Sheet';

  static defaultProps = {
    character: {},
    onChange: noop,
    readonly: false,
  }

  constructor(props) {
    super(props)
    this.character = CharacterModel.create(props.character)
    this.disposeOfSnapshotListener = onSnapshot(this.character, props.onChange)

    window.addEventListener('resize', this.handleWindowResize)
  }

  state = { sizeClass: 'large' }

  componentDidMount() { this.handleWindowResize() }

  componentWillUnmount() { this.disposeOfSnapshotListener() }

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
    const { readonly } = this.props
    const { sizeClass = 'large' } = this.state
    const classes = [
      'sheetforge sheet axis',
      sizeClass,
      readonly ? 'readonly' : '',
    ].filter(Boolean).join(' ')

    /* eslint-disable max-len */
    return (
      <div className={classes} ref={this.bindContainer}>
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
        <PortraitSection url={c.portraitURL} onChange={c.setPortraitURL} />
        <HealthBar health={c.health} />
        <DescriptorSection descriptors={c.descriptors} />
        <AttributeSection attributes={c.attributes} modifiers={c.modifiers} />
        <TraitSection traits={c.traits} modifiers={c.modifiers} addTrait={c.addTrait} layout={sizeClass} />
        <SkillSection skills={c.skills} modifiers={c.modifiers} addSkill={c.addSkill} />
        <EquipmentSection
          buttons={(
            <div className="buttons">
              Add:
              <button className="icon-weapon" onClick={c.addWeapon} />
              <button className="icon-armor" onClick={c.addArmor} />
              <button className="icon-add" onClick={c.addItem} />
            </div>
          )}
          equipment={c.equipment}
          layout={sizeClass}
        />
        <SpellSection spells={c.spells} modifiers={c.modifiers} addSpell={c.addSpell} />
      </div>
    )
    /* eslint-enable max-len */
  }
}
