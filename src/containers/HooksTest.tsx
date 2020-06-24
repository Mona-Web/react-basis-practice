import React, { Component } from 'react'
import UseState1 from '../components/hooks/UseState1'
import UseEffect1 from '../components/hooks/UseEffect1'
import UseCallback1 from '../components/hooks/UseCallback1'
import UseReducer1 from '../components/hooks/UseReducer1'
import UseContext1 from '../components/hooks/UseContext1'

export default class HooksTest extends Component {
  render() {
    return (
      <div>
        <UseState1></UseState1>
        <UseEffect1></UseEffect1>
        <UseCallback1></UseCallback1>
        <UseReducer1></UseReducer1>
        <UseContext1></UseContext1>
      </div>
    )
  }
}
