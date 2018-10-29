import { onSnapshot } from 'mobx-state-tree'
import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Expandable from '@/components/Expandable'
import noop from '@/utilities/noop'
import './Layout.scss'

export default class Layout extends Component {
  titleBar = React.createRef()

  onSnapshotDisposer = noop
  snapshot = null

  componentDidMount() {
    this.onSnapshotDisposer = onSnapshot(this.props.model, (snapshot) => {
      const snapshotJSON = JSON.stringify(snapshot)
      if (this.snapshot !== snapshotJSON) {
        this.snapshot = snapshotJSON
        this.forceUpdate()
      }
    })
    this.forceUpdate() // Immediate redraw to place buttonParent
  }
  componentWillUnmount() { this.onSnapshotDisposer() }

  handleChangeTitle = title => this.props.model.set({ title })

  render() {
    const { children } = this.props
    const { colSpan, title = '' } = this.props.model

    return (
      <div className="layout" style={{ flex: colSpan }}>
        <div className="title-bar" ref={this.titleBar}>
          <Editable
            className="title"
            onChange={this.handleChangeTitle}
            placeholder="Section Title"
            value={title}
          />
        </div>
        <Expandable
          expandByDefault
          omitItemWrapper
          toggleButtonParent={this.titleBar.current}
        >
          {children}
        </Expandable>
      </div>
    )
  }
}
