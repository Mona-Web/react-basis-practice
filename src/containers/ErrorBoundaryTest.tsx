import React, { Component } from 'react'
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary'
import ErrorBoundaryChild from '../components/errorBoundary/ErrorBoundaryChild'

export default class errorBoundaryTest extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <ErrorBoundaryChild></ErrorBoundaryChild>
        </ErrorBoundary>
      </div>
    )
  }
}
