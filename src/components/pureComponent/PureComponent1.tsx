import React, { Component, PureComponent } from 'react'

interface Item {
  id: number
  text: string
}

interface Props {}

interface State {
  list: Item[]
}

class List extends PureComponent<State> {
  render() {
    return (
      <div>
        {this.props.list.map((item) => (
          <div key={item.id}>{item.text}</div>
        ))}
      </div>
    )
  }
}

class Count extends Component<{ count: number }> {
  render() {
    console.log('Count render')
    return <div>{this.props.count}</div>
    // return <div>{'Count'}</div>
  }
}

class PureComponent1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          text: '1'
        },
        {
          id: 2,
          text: '2'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div
          onClick={() => {
            const data = this.state.list[this.state.list.length - 1].id + 1
            // error state不可变
            // this.state.list.push({
            //   id: data,
            //   text: `${data}`
            // })
            this.setState({
              list: this.state.list.concat([
                {
                  id: data,
                  text: `${data}`
                }
              ])

              // error state不可变
              // list: this.state.list
            })
          }}
        >
          PureComponent1:{' '}
        </div>
        <List list={this.state.list}></List>
        <Count count={this.state.list.length}></Count>
      </div>
    )
  }
}

export default PureComponent1
