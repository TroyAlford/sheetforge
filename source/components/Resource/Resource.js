import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Rating from '@/components/Rating'
import './Resource.scss'

export default @observer class Resource extends Component {
  static defaultProps = {
    model: {},
  }

  onChangeCurrent = current => this.props.model.set({ current })

  onChangeName = displayName => this.props.model.set({ displayName })

  render() {
    const { current, displayName, maximum } = this.props.model

    return (
      <div className="resource">
        <Editable
          className="displayName"
          onChange={this.onChangeName}
          value={displayName}
        />
        <Rating
          current={current}
          maximum={maximum}
          onChange={this.onChangeCurrent}
        />
      </div>
    )
  }
}
