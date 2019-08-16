import React, {Component } from 'react'
import ReactDOM from 'react-dom'

// 在 HTML 中, 像 input, textarea, select 等表单元素可以根据用户的输入改变自身的状态(表单的 value ), 而 react 的可变状态存在 state 当中, 我们把表单的状态和 state 中的数据结合起来,使 state 称为单一数据源,这样的组件称为受控组件
// 说白了就时表单的 value 属性绑定组件 state 中的数据,当表单的值发生变更时,更新 state 中的状态
// React 是单项数据绑定的,使用受控组件来实现双向数据绑定

class Input extends Component {
  constructor (props, text) {
    super()
    this.state = {
      num: 1,
      hobby: 1
    }
  }
  render () {
    // 受控组件: 表单元素的 value 绑定state 中的状态,监听 onChange 事件,在事件函数中更新 state 中的状态
    return (<div>
      <p>{this.state.num}</p>
      <input type="text" value={this.state.num} onChange={(e) => this.setState({num: e.target.value})}/>
      <p> hobby:
        <select value={this.state.hobby} onChange={(e) => this.setState({hobby: e.target.value})}>
        <option value="1">唱</option>
        <option value="2">跳</option>
        </select>
      </p>
      {this.state.hobby}
      </div>)
  }
}

ReactDOM.render(<Input />, document.getElementById('root'))