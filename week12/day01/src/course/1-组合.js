// React 中也可以获取组件标签包裹的内容, 类似于 vue 的 slot 机制

import React, { Component } from 'react'

export default class Panel extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<div className="panel panel-success">
      {
        // 通过 props.children 的属性来获取当前组件标签内包裹的内容
        this.props.children
      }
    </div>)
  }
}
