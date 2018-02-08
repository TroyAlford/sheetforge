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

const EquipmentSection = observer(({ equipment = [], buttons }) => (
  <div className="equipment section">
    <header className="icon-backpack">Equipment{buttons}</header>
    {sortEquipment(equipment).map((item) => {
      if (WeaponModel.is(item)) {
        return <Weapon key={item.id} item={item} />
      } else if (ArmorModel.is(item)) {
        return <Armor key={item.id} item={item} />
      }

      return <Item key={item.id} item={item} />
    })}
  </div>
))

EquipmentSection.displayName = 'EquipmentSection'
export default EquipmentSection
