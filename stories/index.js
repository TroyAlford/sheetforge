/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { storiesOf } from '@storybook/react'
import Sheet from '../source/components/Sheet'

storiesOf('Sheet', module)
  .add('basic', () => (
    <Sheet />
  ))
