import React from 'react'
import Editable from '@/components/Editable'

import './LabeledEditable.scss'

export default ({ caption, className, ...props }) => (
  <label className={`labeled-editable ${className}`.trim()}>
    {typeof caption === 'string' ? <span className="caption">{caption}</span> : caption}
    <Editable {...props} />
  </label>
)
