import React, { useState, useEffect } from 'react'

export default function UseEffect1() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    // effect
    setCounter(counter + 1)
    console.log('effect: ', counter)
    return () => {
      // cleanup
    }
  }, [])
  console.log('outer: ', counter)
  return (
    <div>
      <div>useEffect1: </div>
      <div>{counter}</div>
    </div>
  )
}
