import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Section from './Section'

jest.unmock('./Section')

describe('Section', () => {
  /* eslint-disable no-console */
  let parent = null
  let component = null
  let rendered = null

  function render(element) { ReactDOM.render(element, parent) }

  const consoleError = console.error
  beforeAll(() => { console.error = jest.fn() })
  beforeEach(() => {
    console.error.mockClear()
    parent = document.createElement('div')
    component = ReactDOM.render(<Section />, parent)

    // eslint-disable-next-line react/no-find-dom-node
    rendered = () => ReactDOM.findDOMNode(component)
  })
  afterAll(() => {
    console.error = consoleError
  })

  it('renders classes properly', () => {
    render(<Section />)
    expect(rendered().classList).toContain('section')
  })

  it('handles non-string titles gracefully', () => {
    render(<Section title={[]} />)

    const title = TestUtils.findRenderedDOMComponentWithClass(component, 'title')
    expect(title.innerHTML).toEqual('')
  })

  it('renders text headers', () => {
    render(<Section headers={['first', 'second']} />)

    const headers = TestUtils.scryRenderedDOMComponentsWithClass(component, 'heading')
    expect(headers).toHaveLength(2)
    expect(headers[0].classList).toContain('first')
    expect(headers[1].classList).toContain('second')
  })

  it('handles non-text headers', () => {
    render(<Section headers={[undefined, 4, <div />]} />)

    const headers = TestUtils.scryRenderedDOMComponentsWithClass(component, 'heading')
    expect(headers).toHaveLength(3)
    expect(headers[0].innerHTML).toEqual('')
    expect(headers[1].innerHTML).toEqual('4')
    expect(headers[2].children).toHaveLength(1)

    expect(console.error).toBeCalledWith(
      'Warning: Failed prop type: Invalid prop `headers[1]` supplied to `Section`.\n    in Section'
    )
  })
})
