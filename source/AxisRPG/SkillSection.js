import React from 'react'
import Skill from './Skill'

import './SkillSection.scss'

export default ({ character }) => (
  <div className="skills">
    <header>Skills</header>
    {character.skills.map(skill =>
      <Skill character={character} skill={skill} />
    )}
  </div>
)
