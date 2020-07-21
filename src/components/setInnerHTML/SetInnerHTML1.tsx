import React, { Component } from 'react'

export default class SetInnerHTML1 extends Component {
  render() {
    const renderHTML = {
      __html: `<div>SetInnerHTML1: </div>`
    }
    return <div dangerouslySetInnerHTML={renderHTML}></div>
  }
}
