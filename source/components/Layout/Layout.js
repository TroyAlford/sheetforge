import React, { Component } from 'react'
import Editable from '@/components/Editable'
import Expandable from '@/components/Expandable'
import './Layout.scss'

export default class Layout extends Component {
  titleBar = React.createRef()

  snapshot = null

  handleChangeTitle = title => this.props.model.set({ title })

  render() {
    const { children, parentColumns } = this.props
    const { colSpan, title } = this.props.model

    return (
      <div className="layout" style={{ width: `calc(100%/${parentColumns}*${colSpan})` }}>
        {title === undefined
          ? children
          : (
            <>
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
            </>
          )
        }
      </div>
    )
  }
}
