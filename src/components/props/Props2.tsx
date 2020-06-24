import React, { Component } from 'react'

export default class Props2 extends Component {
  render() {
    return (
      <div>
        <div>Props2: </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
