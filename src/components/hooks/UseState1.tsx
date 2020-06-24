import React, { useState } from 'react'

export default function UseState1() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <div>useState1: </div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 2)
        }}
      >
        change state
      </button>
    </div>
  )
}
