import React, { Component } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

export default class Detail extends Component<Props> {
  render() {
    return (
      <div>
        <div>this is Detail-{this.props.match.params.id}</div>
        <Link to="/home">go Home</Link>
      </div>
    )
  }
}
