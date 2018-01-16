/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { storiesOf } from '@storybook/react'
import Sheet from '../source/AxisRPG/Sheet'

storiesOf('AxisSheet', module)
  .add('basic', () => (
    <Sheet />
  ))
