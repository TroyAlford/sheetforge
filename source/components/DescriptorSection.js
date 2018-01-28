import React from 'react'
import { observer } from 'mobx-react'
import Descriptor from '../components/Descriptor'

import './DescriptorSection.scss'

const DISPLAY_ORDER = [
  'homeland', 'race', 'concept',
  'height', 'weight', 'gender',
  'eyes', 'hair', 'age',
]

const DescriptorSection = ({ descriptors }) => (
  <div className="descriptors section">
    <header>Descriptors</header>
    {DISPLAY_ORDER.map(id => (
      <Descriptor key={id} model={descriptors.find(d => d.id === id)} />
    ))}
  </div>
)

export default observer(DescriptorSection)
