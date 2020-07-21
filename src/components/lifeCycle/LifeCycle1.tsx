import React, { Component } from 'react'
import Child1 from './Child1'

interface Props {}
interface State {
  count: number
}

export default class LifeCycle1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    console.log('LifeCycle1-constructor')
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('LifeCycle1-componentWillMount')
  }
  componentDidMount() {
    console.log('LifeCycle1-componentDidMount')
  }
  componentWillUpdate() {
    console.log('LifeCycle1-componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('LifeCycle1-componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('LifeCycle1-componentWillUnmount')
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('LifeCycle1-render')
    return (
      <div>
        <div>LifeCycle1: </div>

        <button
          onClick={this.changeCount}
        >{`changeCount-${this.state.count}`}</button>

        {this.state.count < 5 ? <Child1 count={this.state.count} /> : null}
      </div>
    )
  }
}
