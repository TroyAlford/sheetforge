import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import Card from '@/components/Card'

storiesOf('Card', module)
  .add('expanded & collapsed children', () => {
    const whenExpanded = () => (
      <div>
        <p>This only shows when expanded</p>
        <p>This only shows when expanded</p>
        <p>This only shows when expanded</p>
        <p>This only shows when expanded</p>
      </div>
    )
    const whenCollapsed = () => (<div>This only shows when collapsed</div>)
    return (
      <Card renderExpanded={whenExpanded} renderCollapsed={whenCollapsed}>
        <div>This is always visible</div>
      </Card>
    )
  })
