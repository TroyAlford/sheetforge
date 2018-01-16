import React, { Component } from 'react'
import Editable from '../components/Editable'

export default class Skill extends Component {
  handleNameChange = () => {

  }
  handleTheoryChange = () => {

  }
  handleMasteryChange = () => {

  }

  render() {
    const { name, value: [theory, mastery] } = this.props.skill

    return (
      <div className="skill">
        <Editable className="name" value={name} onChange={this.handleNameChange} />
        <Editable className="theory" value={theory} onChange={this.handleTheoryChange} />
        <Editable className="mastery" value={mastery} onChange={this.handleMasteryChange} />
      </div>
    )
  }
}
