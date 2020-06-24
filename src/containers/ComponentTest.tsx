import React, { Component } from 'react'
import ComponentClass from '../components/component/ComponentClass'
import ComponentFunction from '../components/component/ComponentFunction'

export default class ComponentTest extends Component {
  render() {
    return (
      <div>
        <ComponentClass></ComponentClass>
        <ComponentFunction></ComponentFunction>
      </div>
    )
  }
}
