import React, { useState, useCallback } from 'react'

const UseCallback1 = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

//   const fetch1 = () => {
//     setLoading(true)
//     setTimeout(() => {
//       setCount(count + 1)
//       setLoading(false)
//     }, 1000)
//   }

  const fetch2 = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setCount(count + 1)
      setLoading(false)
    }, 1000)
  }, [])

//   React.useEffect(() => {
//     console.log('useEffect') // * N
//     fetch1()
//   }, [fetch1])

  React.useEffect(() => {
    console.log('useEffect') // * 1
    fetch2()
  }, [fetch2])

  return (
    <div>
      <div>UseCallback1:</div>
      {!loading ? <div>{count}</div> : <div>loading...</div>}
    </div>
  )
}

export default UseCallback1
