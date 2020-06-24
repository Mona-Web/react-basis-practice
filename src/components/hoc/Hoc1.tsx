import React, { Component } from 'react'

interface Props {
  project?: string
  version?: string
}

const WithProject = (Comps: (props: Props) => JSX.Element) => {
  return (props: Props) => (
    <Comps {...props} project={'react-basis-practice'}></Comps>
  )
}

const WithVersion = (Comps: (props: Props) => JSX.Element) => {
  class NewComps extends Component {
    componentDidMount() {
      console.log('componentDidMount')
    }
    render() {
      return <Comps {...this.props} version={'1.0.0'}></Comps>
    }
  }
  return NewComps
}

const Hoc1 = (props: Props) => {
  return (
    <div>
      <div>Hoc1:</div>
      <div>{`${props.project} @ ${props.version}`}</div>
    </div>
  )
}

export default WithVersion(WithProject(Hoc1))
