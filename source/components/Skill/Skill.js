import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'
import './Skill.scss'

@observer class Skill extends Component {
  static defaultProps = {
    model: {},
    onDelete: noop,
  }

  onChangeName = name => this.props.model.set({ name })
  onChangeMastery = mastery => this.props.model.set({ mastery })
  handleCommitName = () => (this.props.model.name === '' && this.props.onDelete(this.props.model))
  onChangeTheory = theory => this.props.model.set({ theory })

  render() {
    const { model } = this.props

    return (
      <div className="skill">
        <Editable
          className="name"
          onChange={this.onChangeName}
          onEditEnd={this.handleCommitName}
          value={model.name}
        />
        <Editable
          className={`theory ${(!model.theory && 'is-zero') || ''}`}
          max={999}
          min={-99}
          onChange={this.onChangeTheory}
          value={model.theory}
        />
        <Editable
          className="mastery"
          max={999}
          min={-99}
          onChange={this.onChangeMastery}
          value={model.mastery}
        />
      </div>
    )
  }
}

export default Skill
