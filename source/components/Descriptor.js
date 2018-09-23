/* eslint-disable react/prop-types */
import { observer } from 'mobx-react'
import React from 'react'
import Editable from '@/components/Editable'

import './Descriptor.scss'

const Descriptor = ({ model }) => (
  <div className={`descriptor ${model.id}`}>
    <div className="name">{model.name}</div>
    <Editable className="value" value={model.value} onChange={model.setValue} />
  </div>
)

export default observer(Descriptor)
