import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import ArmorComponent from '@/components/Armor'
import ArmorModel from '@/models/Armor'

storiesOf('Armor', module)
  .add('expanded & collapsed children', () => {
    const armor = ArmorModel.create()
    return <ArmorComponent armor={armor} />
  })
