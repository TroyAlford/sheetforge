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
        <span className="icon-head" />
        <span className="icon-torso" />
        <span className="icon-arm" />
        <span className="icon-leg" />
        <span className="icon-hand" />
        <span className="icon-feet" />
        <span className="average">Avg</span>
      </div>
    </header>
    {sortArmors(armor).map(a => <Armor key={a.id} armor={a} />)}
  </div>
))

ArmorSection.displayName = 'ArmorSection'
export default ArmorSection
