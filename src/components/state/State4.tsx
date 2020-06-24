import React, { Component } from 'react'

interface Props {}
interface State {
  counter: number
}
export default class State4 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    this.setState(
      (prevState) => {
        console.log('state4-prev:', prevState.counter) // 0
        return {
          counter: prevState.counter + 1
        }
      },
      () => {
        console.log('state4-cb:', this.state.counter) // 2
      }
    )
    console.log('state4-out:', this.state.counter) // 0

    this.setState(
      (prevState) => {
        console.log('state4-prev:', prevState.counter) // 1
        return {
          counter: prevState.counter + 1
        }
      },
      () => {
        console.log('state4-cb:', this.state.counter) // 2
      }
    )
    console.log('state4-out:', this.state.counter) // 0
  }
  render() {
    return (
      <div>
        <div>state4: </div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
