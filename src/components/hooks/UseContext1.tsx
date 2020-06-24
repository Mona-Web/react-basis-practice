import React, { useContext, createContext } from 'react'

const Context = createContext({
  a: '',
  b: ''
})

function Outer() {
  return (
    <Context.Provider
      value={{
        a: 'a1',
        b: 'b1'
      }}
    >
      <div>
        <div>
          <div>
            <Inner></Inner>
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

function Inner() {
  const data: {
    a: string
    b: string
  } = useContext(Context)
  return (
    <div>
      <div>{data.a}</div>
      <div>{data.b}</div>
    </div>
  )
}

export default function UseContext1() {
  return (
    <div>
      <div>UseContext1: </div>
      <Outer></Outer>
    </div>
  )
}
