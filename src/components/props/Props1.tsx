import React, { Component } from 'react'

interface Props {
  msg: string
}

export default class Props1 extends Component<Props> {
  render() {
    return (
      <div>
        <div>Props1: </div>
        <div>{this.props.msg}</div>
      </div>
    )
  }
}
