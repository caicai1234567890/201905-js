import React, {Component } from 'react'
import ReactDOM from 'react-dom'

function Welcome (props) {
  return <h1>{props.time}</h1>
}

function tick () {
  let time = new Date().toLocaleTimeString()
  ReactDOM.render(<Welcome time= {time} />, document.getElementById('root'))
}

// tick()
// setInterval( tick, 1000 )
function User(props) {
  return <h1>姓名: {props.name} 年龄 {props.age}</h1>
}

let data = {
  name: 'lisi',
  age: 12
}

// ReactDOM.render(<User name={data.name} age={data.age}/>, document.getElementById('root'))

// 通过展开运算符可以把一个对象展开成一个组件的 props
ReactDOM.render(<User {...data}/>, document.getElementById('root'))