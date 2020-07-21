import React, { Component } from 'react'

interface Props {
  count: number
}

export default class Child extends Component<Props> {
  constructor(props: Props) {
    super(props)
    console.log('Child-constructor')
  }
  componentWillMount() {
    console.log('Child-componentWillMount')
  }
  componentDidMount() {
    console.log('Child-componentDidMount')
  }
  componentWillReceiveProps(nextProps: Props) {
    console.log('Child-componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(nextProps: Props) {
    console.log('Child-shouldComponentUpdate')
    if (nextProps.count <= 3) return true
    return false
  }
  componentWillUpdate() {
    console.log('Child-componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('Child-componentDidUpdate')
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
      </div>
    )
  }
}
