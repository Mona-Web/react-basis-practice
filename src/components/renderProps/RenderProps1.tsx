import React, { Component } from 'react'

interface Props {
  render: (count: number) => JSX.Element
}
interface State {
  count: number
}

class Use extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // state 公共逻辑
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  render() {
    return (
      <div>
        <div>Use: </div>
        {this.props.render(this.state.count)}
      </div>
    )
  }
}

class RenderProps1 extends Component {
  render() {
    return (
      <div>
        <div>RenderProps1: </div>
        <Use
          render={(count: number) => {
            return <div>{count}</div>
          }}
        ></Use>
      </div>
    )
  }
}

export default RenderProps1
