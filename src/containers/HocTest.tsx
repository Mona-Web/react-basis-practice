import React, { Component } from 'react'
import Hoc1 from '../components/hoc/Hoc1'
import Hoc2 from '../components/hoc/Hoc2'

export default class HocTest extends Component {
  render() {
    return (
      <div>
        <Hoc1></Hoc1>
        <Hoc2></Hoc2>
      </div>
    )
  }
}
