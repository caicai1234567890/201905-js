//  负责把组件拼接起来

import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action'
// 充当 mapDispatchToProps
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

class Todo extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<div className="container">
      <div className="col-md-6 col-md-offset-3">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <TodoHeader />
          </div>
          <div className="panel-body">
            <TodoList></TodoList>
          </div>
          <div className="panel-footer">
            <TodoFooter></TodoFooter>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default connect(state => ({...state}), actions )(Todo)