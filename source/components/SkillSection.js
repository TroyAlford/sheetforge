import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Skill from './Skill'

import './SkillSection.scss'

@observer export default class SkillSection extends Component {
  render = () => {
    const { skills = [] } = this.props
    const rows = Math.ceil(skills.length / 2) + 1
    const style = { gridTemplateRows: `repeat(${rows}, 1fr)` }

    return (
      <div className="skills" style={style}>
        <header>Skills</header>
        {skills.map(skill => <Skill key={skill.get('id')} skill={skill} />)}
      </div>
    )
  }
}
