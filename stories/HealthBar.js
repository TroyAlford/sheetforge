import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import Character from '@/models/Character'
import HealthBar from '@/components/HealthBar'

storiesOf('HealthBar', module)
  .add('basic', () => {
    const character = Character.create()
    return (
      <div style={{ width: 250 }}>
        <HealthBar health={character.health} />
      </div>
    )
  })
