import React, { Component } from 'react'

interface Props {}
interface State {
  counter: number
}
export default class State3 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        console.log('state3-cb1: ', this.state.counter)
      }
    )
    console.log('state3-outer1: ', this.state.counter)

    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        console.log('state3-cb2: ', this.state.counter)
      }
    )
    console.log('state3-outer2: ', this.state.counter)
  }
  render() {
    return (
      <div>
        <div>state3: </div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
