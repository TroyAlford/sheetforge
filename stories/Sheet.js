import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line
import Sheet from '../source/components/Sheet'

function saveToLocalStorage(object) {
  localStorage.setItem('stories/Sheet', JSON.stringify(object))
}
function loadFromLocalStorage() {
  const json = localStorage.getItem('stories/Sheet') || '{}'
  const character = JSON.parse(json)
  return character
}

storiesOf('Sheet', module)
  .add('basic', () => (
    <Sheet />
  ))
  .add('persist to localStorage', () => (
    <Sheet character={loadFromLocalStorage()} onChange={saveToLocalStorage} />
  ))
