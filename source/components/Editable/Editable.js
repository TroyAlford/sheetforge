import React from 'react'
import bound from '@/utilities/bound'
import noop from '@/utilities/noop'
import './Editable.scss'

const TYPES = [
  // Strings
  'text', 'multiline',
  // Checkboxes
  'boolean',
  // Numbers
  'number', 'slider',
]

export default class Editable extends React.Component {
  static displayName = 'Editable'

  static defaultProps = {
    className: '',
    forceEditMode: false,
    max: undefined,
    min: undefined,
    onChange: noop,
    onEditEnd: noop,
    onEditStart: noop,
    onKeyDown: noop,
    onKeyPress: noop,
    onKeyUp: noop,
    placeholder: '',
    readOnly: false,
    readOnlyValue: undefined,
    step: 1,
    type: undefined,
    value: '',
  }

  state = {
    editing: false,
    resetValue: this.props.value,
  }

  get editing() {
    return this.props.forceEditMode || this.state.editing
  }

  getEditorType = () => {
    const { value } = this.props
    let { type } = this.props

    if (type !== undefined && TYPES.includes(type)) { return type }

    type = typeof value
    if (type === 'string') { return value.includes('\n') ? 'multiline' : 'text' }
    if (['boolean', 'number'].includes(type)) { return type }

    return 'text'
  }

  resetChanges = () => {
    this.props.onChange(this.state.resetValue, this.props.value)
    this.handleToggleEditing()
  }

  createRefWithAutoFocus = (editor) => {
    if (!editor) { return }
    this.editor = editor

    const editorType = this.getEditorType()
    if (editorType !== 'boolean' && typeof editor.focus === 'function') { editor.focus() }

    if (['boolean', 'number'].includes(this.getEditorType())) { return }
    if (this.props.forceEditMode && typeof editor.setSelectionRange === 'function') {
      editor.setSelectionRange(editor.value.length, editor.value.length)
    }
  }

  handleChange = ({ target }) => {
    const { min, max } = this.props
    let { value } = target

    // eslint-disable-next-line default-case
    switch (this.getEditorType()) {
      case 'slider':
      case 'number':
        value = parseFloat(value || 0)
        // eslint-disable-next-line prefer-destructuring
        if (Number.isNaN(value)) { value = this.props.value }
        value = bound(value, { max, min })
    }
    this.props.onChange(value, this.state.resetValue)
  }

  handleKeys = (event) => {
    const { target, key, ctrlKey, metaKey } = event

    if (this.props.onKeyDown !== noop) {
      this.props.onKeyDown(event)
      if (event.isDefaultPrevented()) return
    }

    if (key === 'Escape') { this.resetChanges() }
    if (key === 'Enter') {
      if (target.nodeName !== 'TEXTAREA' || ctrlKey || metaKey) {
        this.handleToggleEditing()
      }
    }
  }

  handleReceivingFocus = () => {
    if (this.props.readOnly) { return }
    if (!this.state.editing) { this.handleToggleEditing() }
  }

  handleToggleEditing = () => {
    if (this.props.readOnly) { return }

    const editing = !this.editing

    this.setState({ editing, resetValue: this.props.value }, () => {
      if (this.state.editing) {
        this.props.onEditStart()
      } else {
        this.props.onEditEnd()
      }
    })
  }

  selectOnFocus = event => event.target.select()

  toggleBoolean = () => {
    this.props.onEditStart()
    this.props.onChange(!this.props.value, this.props.value)
    this.props.onEditEnd()
  }

  renderBoolean = () => (
    <input
      type="checkbox"
      checked={Boolean(this.props.value)}
      disabled={this.props.readOnly}
      onChange={this.toggleBoolean}
      ref={this.createRefWithAutoFocus}
    />
  )

  renderMultiline = () => {
    if (!this.editing) {
      const lines = (this.props.value || this.props.placeholder).split('\n')
      const paragraphs = lines.map((line, index) => <p key={index}>{line}</p>
      )
      const className = ['multiline', this.props.value ? '' : 'placeholder'].join(' ').trim()
      return <div className={className} onClick={this.handleToggleEditing}>{paragraphs}</div>
    }

    return (
      <textarea
        disabled={this.props.readOnly}
        onBlur={this.handleToggleEditing}
        onChange={this.handleChange}
        onFocus={this.selectOnFocus}
        onKeyDown={this.handleKeys}
        onKeyPress={this.props.onKeyPress}
        onKeyUp={this.props.onKeyUp}
        placeholder={this.props.placeholder}
        ref={this.createRefWithAutoFocus}
        rows={this.props.value.split('\n').length}
        value={this.props.value}
      />
    )
  }

  renderNumber = () => {
    if (!this.editing) { return this.renderStatic() }

    return (
      <input
        type="number"
        disabled={this.props.readOnly}
        max={this.props.max}
        min={this.props.min}
        onBlur={this.handleToggleEditing}
        onChange={this.handleChange}
        onFocus={this.selectOnFocus}
        onKeyDown={this.handleKeys}
        onKeyPress={this.props.onKeyPress}
        onKeyUp={this.props.onKeyUp}
        placeholder={this.props.placeholder}
        ref={this.createRefWithAutoFocus}
        step={this.props.step}
        value={this.props.value}
      />
    )
  }

  renderSlider = () => (
    <input
      type="range"
      disabled={this.props.readOnly}
      max={this.props.max}
      min={this.props.min}
      onBlur={this.handleToggleEditing}
      onChange={this.handleChange}
      onKeyDown={this.props.onKeyDown}
      onKeyPress={this.props.onKeyPress}
      onKeyUp={this.props.onKeyUp}
      ref={this.createRefWithAutoFocus}
      step={this.props.step}
      value={this.props.value}
    />
  )

  renderText = () => {
    if (!this.editing) { return this.renderStatic() }

    return (
      <input
        type="text"
        disabled={this.props.readOnly}
        onBlur={this.handleToggleEditing}
        onChange={this.handleChange}
        onFocus={this.selectOnFocus}
        onKeyDown={this.handleKeys}
        onKeyPress={this.props.onKeyPress}
        onKeyUp={this.props.onKeyUp}
        placeholder={this.props.placeholder}
        ref={this.createRefWithAutoFocus}
        value={this.props.value}
      />
    )
  }

  renderStatic = () => {
    const { placeholder, readOnlyValue, value } = this.props
    const showPlaceholder = placeholder && !value
    const displayValue = readOnlyValue !== undefined ? readOnlyValue : value
    const className = showPlaceholder ? 'placeholder' : ''
    return (
      <span className={className} onClick={this.handleToggleEditing}>
        {showPlaceholder ? placeholder : displayValue}
      </span>
    )
  }

  renderEditor = () => {
    switch (this.getEditorType()) {
      case 'boolean':
        return this.renderBoolean()
      case 'slider':
        return this.renderSlider()
      case 'multiline':
        return this.renderMultiline()
      case 'number':
        return this.renderNumber()
      default:
        return this.renderText()
    }
  }

  render = () => {
    const { className, readOnly } = this.props

    const classes = [
      'editable',
      this.editing ? 'editing' : '',
      className || '',
      readOnly ? 'readonly' : '',
    ].filter(Boolean)

    let props = {}
    if (!readOnly && !this.editing) {
      props = { onFocus: this.handleReceivingFocus, tabIndex: '0' }
    }

    return (
      <div className={classes.join(' ')} {...props}>
        {this.renderEditor()}
      </div>
    )
  }
}
