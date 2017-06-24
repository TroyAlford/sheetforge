import React from 'react'
import Base from './Base'

export default class Page extends Base {
  render() {
    return (
      <div className={this.classes.join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

Page.defaultProps = {
}
Page.propTypes = {
}
