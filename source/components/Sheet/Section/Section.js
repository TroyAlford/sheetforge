import React from 'react'
import './Section.scss'

export default ({ children, flex = 1, title }) => (
  <div className="section" style={{ flex }}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
)
