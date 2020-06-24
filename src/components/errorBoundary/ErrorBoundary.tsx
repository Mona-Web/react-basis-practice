import React, { Component } from 'react'

interface Props {}
interface State {
  error: any
  errorInfo: any
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo
    })
  }
  render() {
    return (
      <div>
        <div>ErrorBoundary: </div>
        {!this.state.errorInfo ? (
          this.props.children
        ) : (
          <div>
            <div>something went wrong!</div>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        )}
      </div>
    )
  }
}

export default ErrorBoundary
