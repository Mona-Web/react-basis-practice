import React, { Component } from 'react'
import Props1 from '../components/props/Props1'
import Props2 from '../components/props/Props2'

export default class PropsTest extends Component {
  render() {
    return (
      <div>
        <Props1 msg={'this is props1'}></Props1>
        <Props2>
          <div>this is props2</div>
        </Props2>
      </div>
    )
  }
}
