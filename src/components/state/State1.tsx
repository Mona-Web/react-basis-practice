import React, { Component } from 'react'

interface Props {}
interface State {
  counter: number
}
export default class State1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <div>state1: </div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
