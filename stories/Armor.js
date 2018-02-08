import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import ArmorComponent from '@/components/Armor'
import ArmorModel from '@/models/Armor'

const Wrapper = ({ item }) => (
  <div className="axis sheetforge sheet">
    <ArmorComponent item={item} />
  </div>
)

storiesOf('Armor', module)
  .add('expanded & collapsed children', () => {
    const armor = ArmorModel.create()
    return <Wrapper item={armor} />
  })
