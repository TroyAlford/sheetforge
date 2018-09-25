import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import SkillModel from '@/models/Skill'
import modelPropType from '@/utilities/prop-types/model'
import './Skill.scss'

@observer class Skill extends Component {
  static defaultProps = {
    model: {},
  }

  static propTypes = {
    model: modelPropType(SkillModel),
  }

  onChangeName = displayName => this.props.model.set({ displayName })

  onChangeMastery = mastery => this.props.model.set({ mastery })

  onChangeTheory = theory => this.props.model.set({ theory })

  render() {
    const { model } = this.props

    return (
      <div className="skill">
        <Editable
          className="displayName"
          onChange={this.onChangeName}
          value={model.displayName}
        />
        <Editable
          className={`theory ${(!model.theory && 'is-zero') || ''}`}
          onChange={this.onChangeTheory}
          value={model.theory}
        />
        <Editable
          className="mastery"
          onChange={this.onChangeMastery}
          value={model.mastery}
        />
      </div>
    )
  }
}

export default Skill
