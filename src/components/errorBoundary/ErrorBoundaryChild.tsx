import React, { Component } from 'react'

interface Props {}

interface State {
  counter: number
}

class ErrorBoundaryChild extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  changeCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    if (this.state.counter > 5) {
      throw Error('Terrible, I crash!')
    } else {
      return <div onClick={this.changeCounter}>{this.state.counter}</div>
    }
  }
}

export default ErrorBoundaryChild
