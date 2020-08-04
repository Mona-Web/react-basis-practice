import React, { Component } from 'react'
const LifeCycle1 = React.lazy(() => import('../lifeCycle/LifeCycle1'))

export default class Lazy1 extends Component {
  render() {
    return (
      <div>
        <div>Lazy1: </div>
        <React.Suspense fallback={<div>loading...</div>}>
          <LifeCycle1></LifeCycle1>
        </React.Suspense>
      </div>
    )
  }
}
