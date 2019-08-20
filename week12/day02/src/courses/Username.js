import React, { Component } from 'react'
import Local from './Local'

class Username extends Component {
  render() {
    return (<div>
     {/* <input type="text" value={this.state.username} onChange={() => {}}/> */}
     <input type="text" defaultValue={this.props.username}/>
    </div>)
    // 如果表单元素的 value 属性绑定了 state 中的抓鬼太,同时就需要给表单设置 onChange 事件
    // 另外一种解决方案就是给表单元素设置 defaultValue, 设置了 defaultValue 之后就不是受控组件只能操作 DOM 来获取表单的值
  }
}

export default Local('username')(Username)
