import React, { Component } from 'react'
import includes from '@/utilities/includes'
import noop from '@/utilities/noop'

import '@/components/Editable.scss'
import '@/components/LabeledEditable.scss'

const REGEX = /^([\d,]*)p ([\d,]*)g ([\d,]*)s ([\d,]*)c$/

function splitNumber(number) {
  const n = number * 100
  const copper = n % 100
  const silver = Math.floor(n / 100) % 100
  const gold = Math.floor(n / (100 * 100)) % 100
  const platinum = Math.floor(n / (100 * 100 * 100))
  return { copper, silver, gold, platinum }
}
function formatNumber(number) {
  const { copper, silver, gold, platinum } = splitNumber(number)
  return {
    copper: copper.toLocaleString(),
    silver: silver.toLocaleString(),
    gold: gold.toLocaleString(),
    platinum: platinum.toLocaleString(),
  }
}
function numberToString(value) {
  const { copper, gold, silver, platinum } = formatNumber(value)
  return `${platinum}p ${gold}g ${silver}s ${copper}c`
}
function parseString(string) {
  const match = string.match(REGEX)
  if (match) {
    const { 4: copper, 2: gold, 3: silver, 1: platinum } = match
    return { copper, gold, silver, platinum }
  }

  return { copper: '0', gold: '0', silver: '0', platinum: '0' }
}
const toInt = string => parseInt(string.replace(/[^\d]/g, ''), 10) || 0
function stringToNumbers(string) {
  const parsed = parseString(string)
  const { copper, silver, gold, platinum } = parsed || {}
  return {
    copper: toInt(copper || '0', 10),
    silver: toInt(silver || '0', 10),
    gold: toInt(gold || '0', 10),
    platinum: toInt(platinum || '0', 10),
  }
}
function stringToValue(string) {
  const { copper, silver, gold, platinum } = stringToNumbers(string)
  return (copper / 100) + silver + (gold * 100) + (platinum * 10000)
}

const WHITELIST = [
  ...'0123456789'.split(''),
  'ArrowLeft', 'ArrowRight',
  'Backspace', 'Delete', 'Home', 'End',
]

export default class MoneyEditor extends Component {
  static defaultProps = {
    max: Infinity,
    min: 0,
    onChange: noop,
    value: 0,
  }

  componentDidUpdate = () => {
    this.input.selectionStart = this.input.value.length - this.distanceFromEnd
    this.input.selectionEnd = this.input.selectionStart
  }

  onChange = (event) => {
    const { value } = event.target
    if (value.match(REGEX)) {
      this.props.onChange(stringToValue(value))
    }
  }

  onKeyDown = (event) => {
    const { value: targetValue, selectionStart } = event.target
    this.distanceFromEnd = targetValue.length - selectionStart

    if (!includes(WHITELIST, event.key) || includes(['ArrowDown', 'ArrowUp'], event.key)) {
      event.preventDefault()
    } else return

    const { silver, gold, platinum } = formatNumber(this.props.value)
    const platinumEnd = platinum.length + 1
    const goldEnd = platinumEnd + 2 + gold.length
    const silverEnd = goldEnd + 2 + silver.length

    let adjustBy = 0.01
    if (selectionStart <= platinumEnd) {
      adjustBy = 10000
    } else if (selectionStart <= goldEnd) {
      adjustBy = 100
    } else if (selectionStart <= silverEnd) {
      adjustBy = 1
    }

    if (event.key === 'ArrowUp') {
      this.props.onChange(Math.min(this.props.value + adjustBy, this.props.max))
    } else if (event.key === 'ArrowDown') {
      this.props.onChange(Math.max(this.props.value - adjustBy, this.props.min))
    }
  }

  createRef = (input) => { this.input = input }

  render = () => (
    <label className="labeled-editable">
      <i className="icon-currency" />
      <div className="editable">
        <input
          data-value={this.props.value.toFixed(2)}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          ref={this.createRef}
          type="tel"
          value={numberToString(this.props.value)}
        />
      </div>
    </label>
  )
}
