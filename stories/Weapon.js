import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import WeaponComponent from '@/components/Weapon'
import WeaponModel from '@/models/Weapon'

storiesOf('Weapon', module)
  .add('expanded & collapsed children', () => {
    const weapon = WeaponModel.create()
    return <WeaponComponent weapon={weapon} />
  })
