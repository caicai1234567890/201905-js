import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './7-footer'
// 导入 bootstrap

class Panel extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      color: 'success'
    }
  }

  changeType = () => {
    this.setState({
      color: 'danger'
    })
  }
  render () {
    return (<div className="container">
    <div className={`panel panel-${this.state.color}`}>
      <div className="panel-heading">
        头信息
      </div>
      <div className="panel-body">
        主体
      </div>
      <Footer type={this.state.color} changeType = {this.changeType}/>
    </div>
    </div>)
  }
}

ReactDOM.render(<Panel /> , document.getElementById('root'))

// 在 React 中， 子组件修改父组件的数据方式和 vue 不同，当父组件使用子组件的时候，通过 props 把一个可以修改父组件数据的方法传递给子组件，当子组件想要修改父组件的数据的时候，子组件通过 this.props 找到父组件传递过来的数据的方法，然后执行它