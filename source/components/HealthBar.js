import React from 'react'
import hash from '@/utilities/hash'

import './HealthBar.scss'

const HealthBar = ({ health }) => (
  <div className="health-bar">
    {health.levels.map((level, ix) => (
      <div key={hash(ix)} className={level} />
    ))}
  </div>
)

HealthBar.displayName = 'HealthBar'
export default HealthBar
