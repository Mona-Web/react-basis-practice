import React, { Component } from 'react'

interface Props {}

interface State {
  count: number
}

export default class State7 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // 合并 类似 Object.assign
  changeCount1 = () => {
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 1
    })
  }

  // 不合并
  changeCount2 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  render() {
    return (
      <div>
        <div>State7: </div>
        <div>{this.state.count}</div>
        <button onClick={this.changeCount1}>changeCount1</button>
        <button onClick={this.changeCount2}>changeCount2</button>
      </div>
    )
  }
}
