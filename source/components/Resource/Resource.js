import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Rating from '@/components/Rating'
import noop from '@/utilities/noop'
import './Resource.scss'

@observer class Resource extends Component {
  static defaultProps = {
    model: {},
    onDelete: noop,
  }

  static sortOptions = [{
    display: 'icon-sort-name-asc',
    getter: model => model.name,
  }]

  handleChangeCurrent = current => this.props.model.set({ current })
  handleChangeMaximum = maximum => this.props.model.set({ maximum })
  handleChangeName = name => this.props.model.set({ name })
  handleCommitName = () => (this.props.model.name === '' && this.props.onDelete(this.props.model))

  render() {
    const { current, name, maximum } = this.props.model

    return (
      <div className="resource">
        <div className="display">
          <Editable
            className="name"
            onChange={this.handleChangeName}
            onEditEnd={this.handleCommitName}
            value={name}
          />
          <Editable
            className="current"
            max={999}
            min={0}
            onChange={this.handleChangeCurrent}
            value={current}
          />
          {'of'}
          <Editable
            className="maximum"
            max={999}
            min={0}
            onChange={this.handleChangeMaximum}
            value={maximum}
          />
        </div>
        <Rating
          allowExcess
          current={current}
          maximum={maximum}
          onChange={this.handleChangeCurrent}
        />
      </div>
    )
  }
}

export default Resource
