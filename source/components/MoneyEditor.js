import React, { Component } from 'react'
import includes from '@/utilities/includes'
import noop from '@/utilities/noop'

const REGEX = /^([\d,]*)p ([\d,]*)g ([\d,]*)s ([\d,]*)c$/

function splitNumber(number) {
  const copper = number % 100
  const silver = Math.floor(number / 100) % 100
  const gold = Math.floor(number / (100 * 100)) % 100
  const platinum = Math.floor(number / (100 * 100 * 100))
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
  return copper + (silver * 100) + (gold * 10000) + (platinum * 1000000)
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
    const pEnd = platinum.length + 1
    const gEnd = pEnd + 2 + gold.length
    const sEnd = gEnd + 2 + silver.length

    let adjustBy = 1
    if (selectionStart <= pEnd) {
      adjustBy = 1000000
    } else if (selectionStart <= gEnd) {
      adjustBy = 10000
    } else if (selectionStart <= sEnd) {
      adjustBy = 100
    }

    if (event.key === 'ArrowUp') {
      this.props.onChange(Math.min(this.props.value + adjustBy, this.props.max))
    } else if (event.key === 'ArrowDown') {
      this.props.onChange(Math.max(this.props.value - adjustBy, this.props.min))
    }
  }

  createRef = (input) => { this.input = input }
  render = () => (
    <input
      data-value={this.props.value}
      onChange={this.onChange}
      onKeyDown={this.onKeyDown}
      onKeyUp={this.onKeyUp}
      ref={this.createRef}
      type="text"
      value={numberToString(this.props.value)}
    />
  )
}
