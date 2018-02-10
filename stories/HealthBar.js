import React, { Component } from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import HealthBar from '@/components/HealthBar'

class Wrapper extends Component {
  state = { levels: [] }
  handleChange = levels => this.setState({ levels })
  render = () => <HealthBar wounds={this.state.levels} onChange={this.handleChange} />
}

storiesOf('HealthBar', module)
  .add('basic', () => <Wrapper />)
