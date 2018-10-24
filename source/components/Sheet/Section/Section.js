import React, { Component } from 'react'
import Expandable from '@/components/Expandable'
import './Section.scss'

export default class Section extends Component {
  titleBar = React.createRef()

  render() {
    const { children, flex = 1, title } = this.props


    return (
      <div className="section" style={{ flex }}>
        {title && <h1 ref={this.titleBar}>{title}</h1>}
        <Expandable expandByDefault omitItemWrapper toggleButtonParent={this.titleBar.current}>
          {children}
        </Expandable>
      </div>
    )
  }
}
