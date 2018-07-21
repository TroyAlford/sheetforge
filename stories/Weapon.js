import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import Weapon from '@/components/Weapon'

storiesOf('Weapon', module)
  .add('expanded & collapsed children', () => <Weapon />)
