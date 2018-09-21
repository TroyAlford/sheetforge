import React, { Component } from 'react'
import { observer } from 'mobx-react'
import compareBy from '@/utilities/compareBy'
import Spell from '@/components/Spell'

import './SpellSection.scss'

const compareByName = compareBy('name')

const REMOVERS = {}

@observer export default class SpellSection extends Component {
  render = () => {
    const { addSpell, spells = [] } = this.props
    const rows = Math.ceil(spells.length / 2)
    const style = { gridTemplateRows: `25px 25px repeat(${rows || 1}, 30px)` }

    return (
      <div className="spells section" style={style}>
        <header>
          Spells
          <button className="icon-add" onClick={addSpell} />
        </header>
        <header className="subheader">
          <div className="spell">
            <span className="name">Name</span>
            <abbr className="level" title="Level">Lv</abbr>
          </div>
          <div className="spell">
            <span className="name">Name</span>
            <abbr className="level" title="Level">Lv</abbr>
          </div>
        </header>
        {spells.slice().sort(compareByName).map((spell) => {
          if (!REMOVERS[spell.id]) {
            REMOVERS[spell.id] = () => { if (spell.name === '') spell.remove() }
          }
          return <Spell key={spell.id} spell={spell} onEditEnd={REMOVERS[spell.id]} />
        })}
      </div>
    )
  }
}
