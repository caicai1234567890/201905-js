import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// React 的 props 也支持校验，但是需要一个第三方的库 prop-types
// 1. 安装
// 2. 导入
// 3. 在类中声明 propTypes 的静态属性，值是一个对象，对象的 key 就是需要被校验的 props, value 是校验规则，将来组件收到的 prop 不符合规则会触发控制台的警告

class User extends Component {
  // React 组件使用 props 校验需要在类中声明一个静态属性 propTypes,名字不能改
  static propTypes = {
    name: PropTypes.string.isRequired ,
    age:PropTypes.number.isRequired
  }

  // react 的 props 也可以设置默认值
  // 给类设置一个 defaultProps 静态属性
  static defaultProps = {
    age: 18
    // 给 age 设置默认值
  }
  constructor (props, context) {
    super ()
  }
  render () {
    return (<div>
      <p>{this.props.name}</p>
      <p>{this.props.age}</p>
      </div>)
  }
}

ReactDOM.render(<User name="lisi" /> , document.getElementById('root'))