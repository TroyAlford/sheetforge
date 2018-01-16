import React from 'react'
import Skill from './Skill'

import './SkillSection.scss'

const SKILLS = [
  { name: 'Combat: Swordfighting', value: [1, 4] },
  { name: 'Magic: Arcane', value: [4, 3] },
]

export default ({ character }) => (
  <div className="skills">
    <header>Skills</header>
    {SKILLS.map((skill) => {
      console.log(skill)
      return <Skill character={character} skill={skill} />
    })}
  </div>
)
