import React from 'react'
import { observer } from 'mobx-react'
import compareBy from '@/utilities/compareBy'
// import noop from '@/utilities/noop'
import Armor from '@/components/Armor'
import ArmorModel from '@/models/Armor'
import Weapon from '@/components/Weapon'
import WeaponModel from '@/models/Weapon'

import './EquipmentSection.scss'

const sortEquipment = equipment => (
  equipment.sort(compareBy('name')).sort(compareBy('equipped', true))
)

const EquipmentSection = observer(({ equipment = [], buttons }) => (
  <div className="equipment section">
    <header className="icon-backpack">Equipment{buttons}</header>
    {sortEquipment(equipment).map((model) => {
      if (WeaponModel.is(model)) {
        return <Weapon key={model.id} weapon={model} />
      } else if (ArmorModel.is(model)) {
        return <Armor key={model.id} armor={model} />
      }

      { /* return <Type key={model.id} weapon={model} /> */ }
    })}
  </div>
))

EquipmentSection.displayName = 'EquipmentSection'
export default EquipmentSection
