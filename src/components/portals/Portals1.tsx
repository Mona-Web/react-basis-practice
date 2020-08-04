import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Portals1 extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>{this.props.children}</div>,
      document.body
    )
  }
}

export default Portals1
