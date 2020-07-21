import React, { Component } from 'react'

interface Props {
  count: number
}

interface State {
  type: number
}

export default class Child2 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      type: 0
    }
    console.log('Child-constructor')
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('Child-getDerivedStateFromProps')
    if (nextProps.count <= 2) {
      return {
        type: nextProps.count
      }
    } else {
      return null
    }
  }
  componentDidMount() {
    console.log('Child-componentDidMount')
  }
  shouldComponentUpdate(nextProps: Props) {
    console.log('Child-shouldComponentUpdate')
    if (nextProps.count <= 3) return true
    return false
  }
  getSnapshotBeforeUpdate() {
    console.log('Child-getSnapshotBeforeUpdate')
    return window.screenTop
  }
  componentDidUpdate(prevProps: Props, prevState: State, params: number) {
    console.log('Child-componentDidUpdate', prevProps, prevState, params)
  }
  componentWillUnmount() {
    console.log('Child-componentWillUnmount')
  }
  render() {
    console.log('Child-render')
    return (
      <div>
        Child:
        <div>{this.props.count}</div>
        <div>{this.state.type}</div>
      </div>
    )
  }
}
