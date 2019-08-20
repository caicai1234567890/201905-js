import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action/todo'
import TodoItem from './TodoItem'
// actions 是 actionCreator 对象
 class TodoList extends Component {
  constructor (props, context) {
    super ()
  }
  // 为了实现筛选的结果,我们的列表不能再直接渲染全量的数据,列表应该渲染根据 store 中的 filter 过滤出筛选之后的数据
  filterTodo = () => {
    switch(this.props.filter) {
      case 'all':
        return this.props.list
      case 'unfinished':
        return this.props.list.filter(item => !item.isSelected)
      case 'finished' :
        return this.props.list.filter(item => item.isSelected)
    }
  }
  render() {
    return (<ul className="list-group">
      {
        this.filterTodo().map((item,index) => <TodoItem key={item.id} item = {item} changeSelectd = {this.props.changeSelectd} deleteTodo={this.props.deleteTodo}/>)
      }
    </ul>)
  }
}

export default connect((state) => ({...state}),actions)(TodoList)
