import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action/todo'

class Todo extends Component {

  render() {
    return (<div>
      <input type="text" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          // store.dispatch(actions.addTodo(e.target.value))
          this.props.addTodo(e.target.value)
          e.target.value = ''
        } 
      }} />
      <ul>
        {
          this.props.list.map((item,index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>)
  }
}

export default connect((state) => ({...state.todo}), actions)(Todo)
