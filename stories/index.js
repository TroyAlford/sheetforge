/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { storiesOf } from '@storybook/react'
import AxisSheet from '../source/components/AxisSheet'

storiesOf('AxisSheet', module)
  .add('basic', () => (
    <AxisSheet />
  ))
