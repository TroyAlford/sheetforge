import React from 'react'
import Descriptor from '../components/Descriptor'

import './DescriptorSection.scss'

export default ({ character }) => (
  <div className="descriptors">
    <header>Descriptors</header>
    <Descriptor name="homeland" character={character} />
    <Descriptor name="race" character={character} />
    <Descriptor name="concept" character={character} />
    <Descriptor name="height" character={character} />
    <Descriptor name="weight" character={character} />
    <Descriptor name="gender" character={character} />
    <Descriptor name="eyes" character={character} />
    <Descriptor name="hair" character={character} />
    <Descriptor name="age" character={character} />
  </div>
)
