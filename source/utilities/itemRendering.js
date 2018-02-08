import React from 'react'
import LabeledEditable from '@/components/LabeledEditable'

export function renderEditable(item, propName, props) {
  const loweredPropName = propName.toLowerCase()
  const passedProps = {
    ...props,
    className: `${props.className || ''} ${loweredPropName}`.trim(),
  }
  return (
    <LabeledEditable
      caption={props.caption || <i className={`icon-${loweredPropName}`} />}
      className={loweredPropName}
      onChange={item[`set${propName}`]}
      value={item[loweredPropName]}
      {...passedProps}
    />
  )
}
export const renderPropWithIcon = (item, propName) => (
  renderEditable(item, propName, {
    caption: <abbr className={`icon-${propName.toLowerCase()}`} title={propName} />,
    min: 0,
    type: 'number',
  })
)
