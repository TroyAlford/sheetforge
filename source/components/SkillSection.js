import React, { Component } from 'react'
import { observer } from 'mobx-react'
import compareBy from '../utilities/compareBy'
import Skill from './Skill'

import './SkillSection.scss'

@observer export default class SkillSection extends Component {
  render = () => {
    const { addSkill, skills = [] } = this.props
    const rows = Math.ceil(skills.length / 2) + 1
    const style = { gridTemplateRows: `repeat(${rows}, 1fr)` }

    return (
      <div className="skills" style={style}>
        <header>
          Skills
          <button className="icon-add" onClick={addSkill} />
        </header>
        {skills.sort(compareBy('name')).map(skill =>
          <Skill key={skill.id} skill={skill} />
        )}
      </div>
    )
  }
}
