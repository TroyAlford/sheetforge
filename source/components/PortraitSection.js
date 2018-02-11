import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Editable from '@/components/Editable'
import noop from '@/utilities/noop'
import './PortraitSection.scss'

const DEFAULT_PORTRAIT_URL = '//via.placeholder.com/300x400/eeeeee?text=3x4+aspect+ratio'

const buildUrl = url => `url(${url || DEFAULT_PORTRAIT_URL})`
@observer export default class PortraitSection extends Component {
  static defaultProps = {
    onChange: noop,
    url: DEFAULT_PORTRAIT_URL,
  };
  state = {
    editing: false,
  };

  toggleEditing = () => { this.setState({ editing: !this.state.editing }) }

  renderEditor = () => (
    <Editable
      forceEditMode
      type="multiline"
      onChange={this.props.onChange}
      onEditEnd={this.toggleEditing}
      value={this.props.url}
    />
  )
  render = () => (
    <div className="portrait section">
      <header>Portrait</header>
      <div className="border-container">
        <div className="image" onClick={this.toggleEditing} style={{ backgroundImage: buildUrl(this.props.url) }}>
          {this.state.editing && this.renderEditor()}
        </div>
      </div>
    </div>
  )
}
