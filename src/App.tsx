import * as React from 'react'
import ComponentText from './containers/ComponentTest'
import StateTest from './containers/StateTest'
import HooksTest from './containers/HooksTest'
import PropsTest from './containers/PropsTest'
import ContextTest from './containers/ContextTest'
// import HocTest from './containers/HocTest'
import ErrorBoundaryTest from './containers/ErrorBoundaryTest'

class App extends React.Component {
  render() {
    return (
      <>
        {/* <ComponentText></ComponentText> */}
        {/* <StateTest></StateTest> */}
        {/* <HooksTest></HooksTest> */}
        {/* <PropsTest></PropsTest> */}
        {/* <ContextTest></ContextTest> */}
        {/* <HocTest></HocTest> */}
        <ErrorBoundaryTest></ErrorBoundaryTest>
      </>
    )
  }
}

export default App
