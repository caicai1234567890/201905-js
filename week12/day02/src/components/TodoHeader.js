import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action/todo'
// actions 是 actionCreator 对象

class TodoHeader extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<div>
      <h2>亲,您还有{this.props.list.filter(item => !item.isSelected).length}事没做</h2>
      <input className="form-control" onKeyDown={(e) => {
        if(e.keyCode === 13) {
          this.props.addTodo(e.target.value)
          e.target.value = ''
        }
      }}/>
    </div>)
  }
}

export default connect(state => ({...state}), actions)(TodoHeader)
