import React, { Component } from 'react'

interface Props {}
interface State {
  counter: number
}
export default class State2 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    this.setState({
      counter: this.state.counter + 1
    })
    console.log(this.state.counter)
  }
  render() {
    return (
      <div>
        <div>state2: </div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
