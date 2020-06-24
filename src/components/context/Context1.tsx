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

export default class Context1 extends Component {
  render() {
    return (
      <Context.Provider value={store}>
        <div>
          <div>Context1: </div>
          <div>
            <Context.Consumer>
              {(value) => (
                <div onClick={() => value.sayName()}>{value.name}</div>
              )}
            </Context.Consumer>
          </div>
        </div>
      </Context.Provider>
    )
  }
}
