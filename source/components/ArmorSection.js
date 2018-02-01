import React from 'react'
import { observer } from 'mobx-react'
import compareBy from '../utilities/compareBy'
import noop from '../utilities/noop'
import Armor from './Armor'

import './ArmorSection.scss'

const sortArmors = armors => (
  armors.sort(compareBy('name')).sort(compareBy('equipped', true))
)

const ArmorSection = observer(({ addArmor = noop, armor = [] }) => (
  <div className="armors">
    <header>
      Armor
      <button className="icon-add" onClick={addArmor} />
    </header>
    <header className="subheader">
      <div className="armor">
        <abbr className="equipped" title="Equipped">Eq</abbr>
        <span className="name">Name</span>
        <abbr className="icon-head" title="Head" />
        <abbr className="icon-torso" title="Torso" />
        <abbr className="icon-arm" title="Arms" />
        <abbr className="icon-leg" title="Legs" />
        <abbr className="icon-hand" title="Hands" />
        <abbr className="icon-feet" title="Feet" />
        <abbr className="average" title="Average">Avg</abbr>
      </div>
    </header>
    {sortArmors(armor).map(a => <Armor key={a.id} armor={a} />)}
  </div>
))

ArmorSection.displayName = 'ArmorSection'
export default ArmorSection
