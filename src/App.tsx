import * as React from 'react'
import ComponentText from './containers/ComponentTest'
import StateTest from './containers/StateTest'
import HooksTest from './containers/HooksTest'
import PropsTest from './containers/PropsTest'
import ContextTest from './containers/ContextTest'
import HocTest from './containers/HocTest'
import ErrorBoundaryTest from './containers/ErrorBoundaryTest'
import SetInnerHTMLTest from './containers/SetInnerHTMLTest'
import ListTest from './containers/ListTest'
import RouterTest from './containers/RouterTest'
import EventTest from './containers/EventTest'
import LifeCycle from './containers/LifeCycle'

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
        {/* <ErrorBoundaryTest></ErrorBoundaryTest> */}
        {/* <RouterTest></RouterTest> */}
        {/* <SetInnerHTMLTest></SetInnerHTMLTest> */}
        {/* <ListTest></ListTest> */}
        {/* <EventTest></EventTest> */}
        <LifeCycle></LifeCycle>
      </>
    )
  }
}

export default App
