/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../source/components/Card'
import Sheet from '../source/components/Sheet'

storiesOf('Sheet', module)
  .add('basic', () => (
    <Sheet />
  ))

storiesOf('Card', module)
  .add('expanded & collapsed children', () => {
    const whenExpanded = (
      <div>
        <p>This only shows when expanded</p>
        <p>This only shows when expanded</p>
        <p>This only shows when expanded</p>
        <p>This only shows when expanded</p>
      </div>
    )
    const whenCollapsed = (<div>This only shows when collapsed</div>)
    return (
      <Card expandedChildren={whenExpanded} collapsedChildren={whenCollapsed}>
        <div>This is always visible</div>
      </Card>
    )
  })
