import React, { Component } from 'react'
import Context1 from '../components/context/Context1'
import Context2 from '../components/context/Context2'

export default class ContextTest extends Component {
  render() {
    return (
      <div>
        <Context1></Context1>
        <Context2></Context2>
      </div>
    )
  }
}
