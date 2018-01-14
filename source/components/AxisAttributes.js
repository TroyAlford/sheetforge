import React from 'react'
import Attribute from './Attribute'

import './AxisAttributes.scss'

export default ({ character }) => (
  <div className="attributes">
    <header>Attributes</header>

    <Attribute name="potency" character={character} computed />
    <Attribute name="reflex" character={character} computed />
    <Attribute name="resilience" character={character} computed />

    <Attribute name="body" character={character} computed />
    <Attribute name="strength" character={character} />
    <Attribute name="agility" character={character} />
    <Attribute name="fitness" character={character} />

    <Attribute name="mind" character={character} computed />
    <Attribute name="intellect" character={character} />
    <Attribute name="acuity" character={character} />
    <Attribute name="focus" character={character} />

    <Attribute name="spirit" character={character} computed />
    <Attribute name="confidence" character={character} />
    <Attribute name="intuition" character={character} />
    <Attribute name="devotion" character={character} />

    <hr className="divider-1" />

    <strong className="attribute" style={{ gridArea: 'racial' }}>Racial:</strong>
    <Attribute name="size" character={character} />
    <Attribute name="speed" character={character} />
    <Attribute name="naturalArmor" character={character} />

    <strong className="attribute" style={{ gridArea: 'combat' }}>Combat:</strong>
    <Attribute name="accuracy" character={character} />
    <Attribute name="might" character={character} />
    <Attribute name="toughness" character={character} />

    <hr className="divider-2" />

    <strong className="attribute" style={{ gridArea: 'thresholds' }}>Thresholds:</strong>
    <div className="attribute" style={{ gridArea: 'light' }}>
      <span>Light Wound</span>
      {character.modifierFor('damageThreshold')}
    </div>
    <div className="attribute" style={{ gridArea: 'deep' }}>
      <span>Deep Wound</span>
      {character.modifierFor('damageThreshold') * 2}
    </div>
    <div className="attribute" style={{ gridArea: 'death' }}>
      <span>Death Blow</span>
      {character.modifierFor('damageThreshold') * 4}
    </div>
  </div>
)
