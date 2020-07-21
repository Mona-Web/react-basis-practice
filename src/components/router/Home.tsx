import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>this is Home</div>
        <Link to="/detail/item1">go Detail</Link>
      </div>
    )
  }
}
