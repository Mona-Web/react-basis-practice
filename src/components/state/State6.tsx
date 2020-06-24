import React, { Component } from 'react'

interface Props {}
interface State {
  counter: number
}
export default class State6 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    document.body.addEventListener(
      'click',
      () => {
        console.log('state6-before:', this.state.counter) // 0
        this.setState({
          counter: this.state.counter + 1
        })
        console.log('state6-after:', this.state.counter) // 1
      },
      false
    )
  }
  render() {
    return (
      <div>
        <div>state6: </div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
