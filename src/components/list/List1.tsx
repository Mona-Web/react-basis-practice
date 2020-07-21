import React, { Component } from 'react'

export default class List1 extends Component {
  render() {
    const list = [
      {
        text: 'text1',
        id: 'list1'
      },
      {
        text: 'text2',
        id: 'list2'
      },
      {
        text: 'text3',
        id: 'list3'
      }
    ]
    return (
      <div>
        <div>list1: </div>
        {list.map((item, index) => (
          <div key={item.id}>{item.text}</div>
        ))}
      </div>
    )
  }
}
