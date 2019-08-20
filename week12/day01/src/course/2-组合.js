// React 中也可以获取组件标签包裹的内容, 类似于 vue 的 slot 机制
// 除了获取标签中包裹的内容,还可以把指定的内容放在指定的位置,还是通过 props 来实现的

import React, { Component } from 'react'

export default class Panel extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<div className="panel panel-success">
      <div className="panel panel-heading">
        {this.props.head}
        {this.props.children}
      </div>
      <div className="panel panel-body">
        {this.props.body}
      </div>
      <div className="panel panel-footer">
        {this.props.footer}
      </div>
    </div>)
  }
}
