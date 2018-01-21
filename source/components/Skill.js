import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '../components/Editable'

@observer export default class Skill extends Component {
  handleNameChange = (value) => {
    this.props.skill.set('name', value)
  }
  handleTheoryChange = (theory = 0) => {
    const { skill } = this.props
    const [, mastery] = skill.get('value').toJS()
    skill.set('value', [theory, mastery])
  }
  handleMasteryChange = (mastery) => {
    const { skill } = this.props
    const [theory] = skill.get('value').toJS()
    skill.set('value', [theory, mastery])
  }
  handleNameEditStart = () => {
    this.props.skill.set('editingName', true)
  }
  handleNameEditEnd = () => {
    this.props.skill.delete('editingName')
  }

  render() {
    const { skill } = this.props
    const name = skill.get('name')
    const [theory, mastery] = skill.get('value').toJS()

    return (
      <div className="skill">
        <Editable
          className="name"
          forceEditMode={skill.get('editingName')}
          onChange={this.handleNameChange}
          onEditStart={this.handleNameEditStart}
          onEditEnd={this.handleNameEditEnd}
          value={name}
        />
        <Editable
          className="theory"
          max={10}
          min={0}
          type="number"
          onChange={this.handleTheoryChange}
          value={theory || ''}
        />
        <Editable
          className="mastery"
          max={10}
          min={1}
          onChange={this.handleMasteryChange}
          value={mastery}
        />
      </div>
    )
  }
}
