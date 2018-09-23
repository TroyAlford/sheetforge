import { observer } from 'mobx-react'
import React from 'react'
import Armor from '@/components/Armor'
import Item from '@/components/Item'
import Weapon from '@/components/Weapon'
import ArmorModel from '@/models/Armor'
import WeaponModel from '@/models/Weapon'
import compareBy from '@/utilities/compareBy'

import './EquipmentSection.scss'

const sortEquipment = equipment => (
  equipment.slice().sort(compareBy('name')).sort(compareBy('equipped', true))
)

const REMOVERS = {}

const EquipmentSection = observer(({ buttons, equipment = [], layout = 'large' }) => {
  const rows = layout === 'large'
    ? Math.ceil(equipment.length / 2) + 1
    : equipment.length + 1
  const style = { gridTemplateRows: `repeat(${rows}, auto)` }

  return (
    <div className="equipment section" style={style}>
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
  )
})

EquipmentSection.displayName = 'EquipmentSection'
export default EquipmentSection
