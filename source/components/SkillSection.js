import React, { Component } from 'react'
import { observer } from 'mobx-react'
import compareBy from '../utilities/compareBy'
import Skill from './Skill'

import './SkillSection.scss'

@observer export default class SkillSection extends Component {
  render = () => {
    const { addSkill, skills = [] } = this.props
    const rows = Math.ceil(skills.length / 2)
    const style = { gridTemplateRows: `25px 25px repeat(${rows || 1}, 30px)` }

    return (
      <div className="skills" style={style}>
        <header>
          Skills
          <button className="icon-add" onClick={addSkill} />
        </header>
        <header className="subheader">
          <div className="skill">
            <span className="name">Name</span>
            <abbr className="theory" title="Theory">Th</abbr>
            <abbr className="mastery" title="Mastery">Ms</abbr>
          </div>
          <div className="skill">
            <span className="name">Name</span>
            <abbr className="theory" title="Theory">Th</abbr>
            <abbr className="mastery" title="Mastery">Ms</abbr>
          </div>
        </header>
        {skills.sort(compareBy('name')).map(skill =>
          <Skill key={skill.id} skill={skill} />
        )}
      </div>
    )
  }
}
