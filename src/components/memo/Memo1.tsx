import React, { Component, PureComponent } from 'react'
import List from './List'

interface Item {
  id: number
  text: string
}

interface Props {}

interface State {
  list: Item[]
}

class Count extends Component<{ count: number }> {
  render() {
    return <div>{this.props.count}</div>
  }
}

class Memo1 extends Component<Props, State> {
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

            this.setState({
              list: this.state.list.concat([
                {
                  id: data,
                  text: `${data}`
                }
              ])
            })
          }}
        >
          Memo1:{' '}
        </div>
        <List list={this.state.list}></List>
       
        <Count count={this.state.list.length}></Count>
      </div>
    )
  }
}

export default Memo1
