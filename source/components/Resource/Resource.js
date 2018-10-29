import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Rating from '@/components/Rating'
import './Resource.scss'

@observer class Resource extends Component {
  static defaultProps = {
    model: {},
  }

  onChangeCurrent = current => this.props.model.set({ current })

  onChangeMaximum = maximum => this.props.model.set({ maximum })

  onChangeName = name => this.props.model.set({ name })

  render() {
    const { current, name, maximum } = this.props.model

    return (
      <div className="resource">
        <div className="display">
          <Editable className="name" onChange={this.onChangeName} value={name} />
          <Editable
            className="current"
            max={999}
            min={0}
            onChange={this.onChangeCurrent}
            value={current}
          />
          {'of'}
          <Editable
            className="maximum"
            max={999}
            min={0}
            onChange={this.onChangeMaximum}
            value={maximum}
          />
        </div>
        <Rating
          allowExcess
          current={current}
          maximum={maximum}
          onChange={this.onChangeCurrent}
        />
      </div>
    )
  }
}

export default Resource
