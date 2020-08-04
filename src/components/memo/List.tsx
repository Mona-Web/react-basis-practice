import React from 'react'

interface Item {
  id: number
  text: string
}

function List({ list }: { list: Item[] }) {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  )
}
export default React.memo(List)
