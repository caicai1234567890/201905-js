
// 总装
import React, { Component } from 'react'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter'

export default class Todo extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (
      <div className="col-md-5 col-md-offset-3">
      <div className="panel panel-danger">
      <div className="panel panel-heading">
        <TodoHeader />
      </div>
      <div className="panel-body">
        <TodoList />
      </div>
      <div className="panel-footer">
        <TodoFooter />
      </div>
    </div>
    </div>
    )
  }
}

// React 的组件分为智能组件(有自己的数据和方法),木偶组件(没有自己的数据和方法,都是从外界传来的)
