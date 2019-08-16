import React from 'react'
import ReactDOM from 'react-dom'
import './fruit.css'

let fruits = [
  {
    name: '苹果',
    color: ['red', 'green', 'yellow']
  },
  {
    name: '香蕉',
    color: ['green', 'yellow']
  },
  {
    name: '芒果',
    color: ['green', 'yellow']
  }
]
let lis = fruits.map((item, index) => {
  return <li key={index} className={index %2 === 0 ? 'fruit' : 'other'}>
    {item.name}
    <ul>
      { item.color.map(( color, index ) => <li key={index}>{color}</li>) }
    </ul>
  </li>
})

let ul = (<ul>{lis}</ul>)

ReactDOM.render(ul, document.getElementById('root'))