import React from 'react'
import bound from '../utilities/bound'
import './Editable.scss'

export default class Editable extends React.Component {
  static defaultProps = {
    className: '',
    max: 0,
    min: 100,
    onChange: () => true,
    placeholder: '',
    readonly: false,
    step: 1,
    value: '',
  }

  state = {
    editing: false,
    resetValue: this.props.value,
  }

  getEditorType = () => {
    let { type, value } = this.props // eslint-disable-line
    const types = [
      // Strings
      'text', 'multiline',
      // Checkboxes
      'boolean',
      // Numbers
      'number', 'slider',
    ]
    if (type !== undefined && types.includes(type)) return type

    type = typeof value
    if (type === 'string') return value.includes('\n') ? 'multiline' : 'text'
    if (['boolean', 'number'].includes(type)) return type

    return 'text'
  }
  resetChanges = () => {
    this.props.onChange(this.state.resetValue, this.props.value)
  }

  createRefWithAutoFocus = (editor) => {
    if (editor && typeof editor.focus === 'function') editor.focus()
    this.editor = editor
  }

  handleChange = ({ target }) => {
    const { min, max } = this.props
    let { value } = target

    // eslint-disable-next-line default-case
    switch (this.getEditorType()) {
      case 'slider':
      case 'number':
        value = parseInt(value || 0, 10)
        if (Number.isNaN(value)) value = this.props.value
        value = bound(value, { min, max })
    }
    this.props.onChange(value, this.state.originalValue)
  }
  handleKeys = (event) => {
    const { target, key, ctrlKey, metaKey } = event

    if (key === 'Escape') this.resetChanges()
    if (key === 'Enter') {
      if (target.nodeName !== 'TEXTAREA' || ctrlKey || metaKey) {
        this.handleToggleEditing()
      }
    }
  }
  handleReceivingFocus = () => {
    if (this.props.readonly) return
    if (!this.state.editing) this.handleToggleEditing()
  }
  handleToggleEditing = () => {
    if (this.props.readonly) return
    this.setState({
      editing: !this.state.editing,
      resetValue: this.props.value,
    })
  }

  selectOnFocus = event => event.target.select()
  toggleBoolean = () => {
    this.props.onChange(!this.props.value, this.props.value)
  }

  renderBoolean = () => (
    <input
      type="checkbox"
      checked={Boolean(this.props.value)}
      disabled={this.props.readonly}
      onChange={this.toggleBoolean}
    />
  )
  renderMultiline = () => {
    if (!this.state.editing) {
      const lines = this.props.value.split('\n')
      const paragraphs = lines.map((line, index) =>
        <p key={index}>{line}</p>
      )
      return <span onClick={this.handleToggleEditing}>{paragraphs}</span>
    }

    return (
      <textarea
        onBlur={this.handleToggleEditing}
        onChange={this.handleChange}
        onKeyDown={this.handleKeys}
        placeholder={this.props.placeholder}
        ref={this.createRefWithAutoFocus}
        rows={this.props.value.split('\n').length}
      >{this.props.value}</textarea> // eslint-disable-line
    )
  }
  renderNumber = () => {
    if (!this.state.editing) return this.renderStatic()

    return (
      <input
        type="number"
        max={this.props.max}
        min={this.props.min}
        onBlur={this.handleToggleEditing}
        onChange={this.handleChange}
        onFocus={this.handleReceivingFocus}
        onKeyDown={this.handleKeys}
        placeholder={this.props.placeholder}
        ref={this.createRefWithAutoFocus}
        step={this.props.step || 1}
        value={this.props.value}
      />
    )
  }
  renderSlider = () => {
    if (!this.state.editing) return this.renderStatic()

    return (
      <input
        type="range"
        disabled={this.props.readonly}
        max={this.props.max || 100}
        min={this.props.min || 0}
        onBlur={this.handleToggleEditing}
        onChange={this.handleChange}
        ref={this.createRefWithAutoFocus}
        step={this.props.step || 1}
        value={this.props.value}
      />
    )
  }
  renderText = () => {
    if (!this.state.editing) return this.renderStatic()

    return (
      <input
        type="text"
        onBlur={this.handleToggleEditing}
        onChange={this.handleChange}
        onFocus={this.selectOnFocus}
        onKeyDown={this.handleKeys}
        placeholder={this.props.placeholder}
        ref={this.createRefWithAutoFocus}
        value={this.props.value}
      />
    )
  }
  renderStatic = () => (
    <span onClick={this.handleToggleEditing}>{this.props.value}</span>
  )

  renderEditor = () => {
    switch (this.getEditorType()) {
      case 'boolean':
        return this.renderBoolean()
      case 'slider':
        return this.renderSlider()
      case 'multiline':
        return this.renderMultilineEditor()
      case 'number':
        return this.renderNumber()
      default:
        return this.renderText()
    }
  }
  render = () => {
    this.editor = null

    const { className, readonly } = this.props
    const { editing } = this.state

    const classes = [
      'editable',
      editing ? 'editing' : '',
      className || '',
      readonly ? 'readonly' : '',
    ].filter(Boolean)

    let props = {}
    if (!readonly && !editing) {
      props = { tabIndex: '0', onFocus: this.handleReceivingFocus }
    }

    return (
      <div className={classes.join(' ')} {...props}>
        {this.renderEditor()}
      </div>
    )
  }
}

/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  const PropTypes = require('prop-types')

  Editable.propTypes = {
    className: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    step: PropTypes.number,
    value: PropTypes.any,
  }
}
/* eslint-enable */
