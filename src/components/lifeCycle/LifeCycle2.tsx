import React, { Component } from 'react'
import Child2 from './Child2'

interface Props {}
interface State {
  count: number
}

export default class LifeCycle2 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    console.log('LifeCycle2-constructor')
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log('LifeCycle2-componentDidMount')
  }
  componentDidUpdate() {
    console.log('LifeCycle2-componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('LifeCycle2-componentWillUnmount')
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('LifeCycle2-render')
    return (
      <div>
        <div>LifeCycle2: </div>
        <button
          onClick={this.changeCount}
        >{`changeCount-${this.state.count}`}</button>

        <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
          LifeCycle
        </a>

        {this.state.count < 5 ? <Child2 count={this.state.count} /> : null}
      </div>
    )
  }
}
