import React, { Component } from 'react'

interface Props {
  project?: string
  version?: string
}

interface State {}

// const WithProject = (Comps: React.ComponentClass) => {
//   return (props: Props) => (
//     <Comps {...props} project={'react-basis-practice'}></Comps>
//   )
// }

// const WithVersion = (Comps: React.ComponentClass) => {
//   class NewComps extends Component<Props> {
//     componentDidMount() {
//       console.log('componentDidMount')
//     }
//     render() {
//       return <Comps {...this.props} version={'1.0.0'}></Comps>
//     }
//   }
//   return NewComps
// }

// @WithVersion
// @WithProject
class Hoc2 extends Component<Props, State> {
  render() {
    return (
      <div>
        <div>Hoc2:</div>
        <div>{`${this.props.project} @ ${this.props.version}`}</div>
      </div>
    )
  }
}

export default Hoc2
