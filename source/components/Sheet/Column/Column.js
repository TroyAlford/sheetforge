import React from 'react'
import './Column.scss'

export default ({ children, flex }) => (
  <div className="column" style={{ flex }}>{children}</div>
)
