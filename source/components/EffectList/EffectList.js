import { observer } from 'mobx-react'
import PropTypes from 'prop-types' // eslint-disable-line
import React, { Component, Fragment } from 'react'
import Effect from '@/components/Effect'
import EffectModel from '@/models/Effect'
import CollectionOf from '@/models/generic/Collection'
import modelPropType from '@/utilities/prop-types/model'
import './EffectList.scss'

@observer class EffectList extends Component {
  static defaultProps = {
    className: '',
    expanded: false,
    model: {},
  }

  static propTypes = {
    className: PropTypes.string,
    expanded: PropTypes.bool,
    model: modelPropType(CollectionOf(EffectModel)),
  }

  state = {
    expanded: this.props.expanded,
  }

  handleAdd = () => {
    this.props.model.push({})
    this.forceUpdate()
  }

  handleDelete = ({ target }) => {
    const index = parseInt(target.getAttribute('data-index'), 10)
    this.props.model.deleteAt(index)
    this.forceUpdate()
  }

  // eslint-disable-next-line react/no-access-state-in-setstate
  handleToggle = () => this.setState({ expanded: !this.state.expanded })

  render() {
    const { className, model } = this.props
    const toggleState = this.state.expanded ? 'expanded' : 'collapsed'

    return (
      <Fragment>
        <div className={`effect-list-toggle icon-${toggleState}`} onClick={this.handleToggle} />
        <div className={`effect-list ${className}`}>
          <button className="icon-add" onClick={this.handleAdd}>
            Add Effect
          </button>
          {model.map((effect, index) => (
            <div className="effect-wrapper" key={index}>
              <Effect model={effect} />
              <button className="icon-remove" data-index={index} onClick={this.handleDelete} />
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default EffectList
