import React from 'react'
import Attribute from './Attribute'

import './AttributeSection.scss'

export default ({ character }) => (
  <div className="attributes">
    <header>Attributes</header>

    <Attribute name="potency" character={character} className="header highlight" computed />
    <Attribute name="reflex" character={character} className="header highlight" computed />
    <Attribute name="resilience" character={character} className="header highlight" computed />

    <Attribute name="body" character={character} className="header highlight" computed />
    <Attribute name="strength" character={character} />
    <Attribute name="agility" character={character} />
    <Attribute name="fitness" character={character} />

    <Attribute name="mind" character={character} className="header highlight" computed />
    <Attribute name="intellect" character={character} />
    <Attribute name="acuity" character={character} />
    <Attribute name="focus" character={character} />

    <Attribute name="spirit" character={character} className="header highlight" computed />
    <Attribute name="confidence" character={character} />
    <Attribute name="intuition" character={character} />
    <Attribute name="devotion" character={character} />

    <hr className="divider-1" />

    <Attribute caption="Racial" className="racial header highlight" />
    <Attribute name="size" character={character} />
    <Attribute name="speed" character={character} computed />
    <Attribute name="naturalArmor" character={character} />

    <Attribute caption="Combat" className="combat header highlight" />
    <Attribute name="accuracy" character={character} computed />
    <Attribute name="might" character={character} computed />
    <Attribute name="toughness" character={character} computed />

    <hr className="divider-2" />

    <Attribute caption="Damage" className="thresholds header highlight" />
    <Attribute caption="Light" className="light" name="damageThresholdLight" character={character} computed />
    <Attribute caption="Deep" className="deep" name="damageThresholdDeep" character={character} computed />
    <Attribute caption="Deadly" className="death" name="damageThresholdDeath" character={character} computed />
  </div>
)
