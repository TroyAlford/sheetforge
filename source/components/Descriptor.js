/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react'
import Editable from '@/components/Editable'

const Descriptor = ({ model }) => (
  <div className={`descriptor ${model.id}`}>
    <div className="name">{model.name}</div>
    <Editable className="value" value={model.value} onChange={model.setValue} />
  </div>
)

export default observer(Descriptor)
