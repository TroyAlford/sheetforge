/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react'
import Editable from './Editable'

const Descriptor = ({ model }) => (
  <div className={`descriptor ${model.id}`}>
    <strong>{model.name}</strong>
    <Editable value={model.value} onChange={model.setValue} />
  </div>
)

export default observer(Descriptor)
