import React from 'react'

export default class Page extends React.Component {
  render() {
    const classes = ['sheetforge', 'page', this.props.className, ...this.props.classes]
    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

Page.propTypes = {

}
Page.defaultProps = {
  classes: [],
  className: '',
}
