jest.unmock('./Base')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Base from './Base'

describe('Base', () => {
  let parent = null, component = null, rendered = null

  function render(element) { ReactDOM.render(element, parent) }

  beforeEach(() => {
    parent = document.createElement('div')
    component = ReactDOM.render(<Base />, parent)
    rendered = () => ReactDOM.findDOMNode(component)
  })

  it('renders classes properly', () => {
    render(<Base className="test" classes={['foo', 'bar', '']} />)

    expect(rendered().classList).toContain('base')
    expect(rendered().classList).toContain('test')
    expect(rendered().classList).toContain('foo')
    expect(rendered().classList).toContain('bar')
    expect(rendered().className).not.toMatch(/  /) // Empty strings are removed

    expect(component.classString).toEqual('sheetforge base test foo bar')

    component.setState({ classes: ['state'] })
    expect(rendered().classList).toContain('state')
    expect(component.classString).toEqual('sheetforge base test foo bar state')
  })
})
