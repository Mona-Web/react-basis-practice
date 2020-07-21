import React, { Component } from 'react'

export default class Event1 extends Component {
  render() {
    return (
      <div>
        <div
          onClick={(e) => {
            this.handleClick(e)
          }}
        >
          Event1:
        </div>
      </div>
    )
  }

  handleClick = (e: any) => {
    console.log(e) // SyntheticEvent
    console.log(e.currentTarget) // !指向当前元素，即当前元素触发
    console.log(e.target) // 指向当前元素，假象！！！

    console.log(e.nativeEvent) // MouseEvent
    console.log(e.nativeEvent.currentTarget) // 指向当前元素，即当前元素触发
    console.log(e.nativeEvent.target) // 指向 document ！！！

    // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力；
    // 2. event.nativeEvent 是原生事件对象；
    // 3. 所有的事件，都被挂载到 document 上；
    // 4. 和 DOM 事件不一样，和 Vue 事件也不一样。
  }
}
