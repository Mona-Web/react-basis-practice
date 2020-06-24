import React, { Component } from 'react'

interface Props {}
interface State {
  counter: number
}
export default class State5 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1
      })
      console.log('state5-in:', this.state.counter) // 1
    }, 0)
    console.log('state5-out:', this.state.counter) // 0
  }
  render() {
    return (
      <div>
        <div>state5: </div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
