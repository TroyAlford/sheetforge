import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

jest.unmock('./Page')

describe('Page', () => {
  let parent
  let component
  let rendered

  function render(element) { ReactDOM.render(element, parent) }

  beforeEach(() => {
    parent = document.createElement('div')
    component = ReactDOM.render(<Page />, parent)

    // eslint-disable-next-line react/no-find-dom-node
    rendered = () => ReactDOM.findDOMNode(component)
  })

  it('renders classes properly', () => {
    render(<Page />)
    expect(rendered().classList).toContain('page')
  })
})
