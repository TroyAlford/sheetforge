import React, { Component } from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import MoneyEditor from '@/components/MoneyEditor'

class Wrapper extends Component {
  state = { value: this.props.value || 0 }
  handleChange = value => this.setState({ value })
  render = () => <MoneyEditor value={this.state.value} onChange={this.handleChange} />
}

storiesOf('MoneyEditor', module)
  .add('basic', () => <Wrapper value={0} />)
