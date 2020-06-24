import React, { useReducer } from 'react'

interface State {
  counter: number
}

const reducer = (state: State, action: { type: string }) => {
  switch (action.type) {
    case 'add':
      return { counter: state.counter + 1 }
    case 'minus':
      return { counter: state.counter - 1 }
    default:
      return { counter: state.counter }
  }
}

const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 1 })
  return (
    <div>
      <div>UseReducer1:</div>
      <button
        onClick={() => {
          dispatch({ type: 'minus' })
        }}
      >
        -
      </button>

      <div>{state.counter}</div>

      <button
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        +
      </button>
    </div>
  )
}

export default UseReducer1
