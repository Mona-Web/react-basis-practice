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

    // 如果你想异步访问事件属性，你需在事件上调用 event.persist()，此方法会从池中移除合成事件，允许用户代码保留对事件的引用。
    e.persist()

    setTimeout(() => {
      // SyntheticEvent 是合并而来。这意味着 SyntheticEvent 对象可能会被重用，而且在事件回调函数被调用后，所有的属性都会无效。出于性能考虑，你不能通过异步访问事件。
      console.log(e.type) // null
    }, 1000)
  }
}
