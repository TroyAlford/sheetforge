import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import Armor from '@/components/Armor'

storiesOf('Armor', module)
  .add('expanded & collapsed children', () => <Armor />)
