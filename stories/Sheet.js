import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import Sheet from '../source/components/Sheet'

storiesOf('Sheet', module)
  .add('basic', () => (
    <Sheet />
  ))
