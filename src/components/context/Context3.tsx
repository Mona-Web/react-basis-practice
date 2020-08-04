import React, { Component } from 'react'

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

function Inner1() {
  return (
    <Context.Consumer>
      {(value) => (
        <div onClick={() => value.sayName()}>{`Inner1-${value.name}`}</div>
      )}
    </Context.Consumer>
  )
}

class Inner2 extends Component {
  static contextType = Context
  render() {
    const value = this.context
    return <div onClick={() => value.sayName()}>{`Inner2-${value.name}`}</div>
  }
}

class Context3 extends Component {
  render() {
    return (
      <div>
        <div>Context3: </div>
        <Context.Provider value={store}>
          <div>
            <div>
              <Inner1></Inner1>
              <Inner2></Inner2>
            </div>
          </div>
        </Context.Provider>
      </div>
    )
  }
}

export default Context3
