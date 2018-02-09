import React from 'react'
import { observer } from 'mobx-react'
import compareBy from '@/utilities/compareBy'
import Armor from '@/components/Armor'
import ArmorModel from '@/models/Armor'
import Item from '@/components/Item'
import Weapon from '@/components/Weapon'
import WeaponModel from '@/models/Weapon'

import './EquipmentSection.scss'

const sortEquipment = equipment => (
  equipment.sort(compareBy('name')).sort(compareBy('equipped', true))
)

const REMOVERS = {}

const EquipmentSection = observer(({ equipment = [], buttons }) => (
  <div className="equipment section">
    <header className="icon-backpack">Equipment{buttons}</header>
    {sortEquipment(equipment).map((item) => {
      if (!REMOVERS[item.id]) {
        REMOVERS[item.id] = () => { if (item.name === '') item.remove() }
      }
      const props = { key: item.id, item, onEditEnd: REMOVERS[item.id] }

      let Type = Item
      if (WeaponModel.is(item)) Type = Weapon
      if (ArmorModel.is(item)) Type = Armor

      return <Type {...props} />
    })}
  </div>
))

EquipmentSection.displayName = 'EquipmentSection'
export default EquipmentSection
