import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AxisCharacter from '../models/AxisCharacter'

import './AxisSheet.scss'

@observer export default class AxisSheet extends Component {
  constructor(props) {
    super(props)
    this.character = new AxisCharacter()
  }

  render = () => (
    <div className="sheet">
      <header>Sheet</header>
    </div>
  )
}
