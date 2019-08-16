import React, { Component } from 'react'
import store from '../store'
/* import * as types from '../action-types' */

// 从 store/action 中导入 actionCreator
import actions from '../store/action/todo'
/* function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  }
}
 */
export default class Todo extends Component {
  constructor (props, context) {
    super ()
    /* this.state = {
      list: store.getState().todo.list,
      filter: store.getState().todo.filter
    } */
    this.state = {
      ...store.getState().todo
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      this.setState({
        ...store.getState().todo
      })
    })
  }
  render() {
    return (<div>
      <input type="text" onKeyDown={(e) => {
        if (e.keyCode === 13) {
         /*  this.setState({
            list: [...this.state.list, e.target.value]
          })
          e.target.value = '' */
          store.dispatch(actions.addTodo(e.target.value))
          e.target.value = ''
        } 
      }} />
      <ul>
        {
          this.state.list.map((item,index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>)
  }
}
