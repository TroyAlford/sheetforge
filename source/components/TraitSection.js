import React from 'react'
import { observer } from 'mobx-react'
import compareBy from '@/utilities/compareBy'
import noop from '@/utilities/noop'
import Trait from '@/components/Trait'

import './TraitSection.scss'

const compareByName = compareBy('name')

const TraitSection = observer(({ addTrait = noop, layout = 'large', traits = [] }) => {
  const rows = layout === 'medium' ? Math.ceil(traits.length / 2) : traits.length
  const style = { gridTemplateRows: `25px 25px repeat(${rows || 1}, 30px)` }
  return (
    <div className="traits" style={style}>
      <header>
        Traits
        <button className="icon-add" onClick={addTrait} />
      </header>
      <header className="subheader">
        <div className="trait">
          <span className="name">Name</span>
          <span className="value">Cost</span>
        </div>
        <div className="trait">
          <span className="name">Name</span>
          <span className="value">Cost</span>
        </div>
      </header>
      {traits.sort(compareByName).map(trait => <Trait key={trait.id} trait={trait} />)}
    </div>
  )
})

TraitSection.displayName = 'TraitSection'
export default TraitSection
