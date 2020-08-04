import React, { Component, ReactComponentElement, ReactNode } from 'react'

interface Props {
  value: {
    name: string
    sayName: () => void
  }
}

const Context = React.createContext({
  name: '',
  sayName() {}
})

const store = {
  name: 'Mona',
  sayName() {
    console.log(this.name)
  }
}

const WithProvider = (Comps: new () => Component) => (props: any) => {
  return (
    <Context.Provider value={store}>
      <Comps {...props}></Comps>
    </Context.Provider>
  )
}

const WithConsumer = (Comps: new () => Component<Props>) => (
  props: Props
) => (
  <Context.Consumer>
    {(value) => <Comps {...props} value={value}></Comps>}
  </Context.Consumer>
)

// @WithConsumer
// class Inner extends Component<Props> {
//   render() {
//     return (
//       <div onClick={() => this.props.value.sayName()}>
//         {this.props.value.name}
//       </div>
//     )
//   }
// }

// @WithProvider
export default class Context2 extends Component {
  render() {
    return (
      <div>
        <div>Context2: </div>
        {/* <Inner></Inner> */}
      </div>
    )
  }
}
