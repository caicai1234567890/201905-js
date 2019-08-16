import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './6-Header'
// 在 React 中, 父组件向子组件传递数据也是通过 props
// 1. 父组件的 state 可以通过 props 传递给子组件
// 2. 父组件的 props 可以通过 props 传递给子组件

class Panel extends Component {
  constructor (props, content) {
    super()
    this.state = {
      time: '1970-01-01 00:00:00'
    }
  }

  render () {
    return  (<div>
      <div className="panel-heading">
        <Header news="按时下课" {...this.state}
        name = {this.props.name}
        >
        </Header>
        <div className="panel-body">
        {this.props.name}
        {this.props.age}
        </div>
      </div>
      </div>)
  }
}

let data = {
  name: 'lisi',
  age : 18
}
ReactDOM.render(<Panel {...data} />, document.getElementById('root'))