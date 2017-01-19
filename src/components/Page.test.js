jest.unmock('./Page')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Page from './Page'

describe('Page', () => {
  let parent = null, component = null, rendered = null

  function render(element) { ReactDOM.render(element, parent) }

  beforeEach(() => {
    parent = document.createElement('div')
    component = ReactDOM.render(<Page />, parent)
    rendered = () => ReactDOM.findDOMNode(component)
  })

  it('renders classes properly', () => {
    render(<Page />)

    expect(rendered().classList.contains('page')).toEqual(true)
  })
})
