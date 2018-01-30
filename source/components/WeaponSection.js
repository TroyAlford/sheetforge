import React from 'react'
import { observer } from 'mobx-react'
import compareBy from '../utilities/compareBy'
import noop from '../utilities/noop'
import Weapon from './Weapon'

import './WeaponSection.scss'

const sortWeapons = weapons => (
  weapons.sort(compareBy('name')).sort(compareBy('equipped', true))
)

const WeaponSection = observer(({ addWeapon = noop, weapons = [] }) => (
  <div className="weapons">
    <header>
      Weapons
      <button className="icon-add" onClick={addWeapon} />
    </header>
    <header className="subheader">
      <div className="weapon">
        <abbr className="equipped" title="Equipped">Equip</abbr>
        <span className="name">Name</span>
        <span className="damage">Dmg</span>
        <abbr className="range" title="Range">Rng</abbr>
        <abbr className="accuracy" title="Accuracy">Acc</abbr>
      </div>
    </header>
    {sortWeapons(weapons).map(weapon => <Weapon key={weapon.id} weapon={weapon} />)}
  </div>
))

export default WeaponSection
