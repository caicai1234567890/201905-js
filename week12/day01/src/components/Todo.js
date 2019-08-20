import React, { Component } from 'react'
import { connect } from 'react-redux' 
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Todo extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<div className="container">
      <div className="col-md-6 col-md-offset-3">
        <div className="panel panel-danger">
          <div className="panel panel-heading">
            <TodoHeader/>
          </div>
          <div className="panel panel-body">
            <TodoList />
          </div>
          <div className="panel panel-footer">
            <TodoFooter />
          </div>
        </div>
      </div> 
    </div>)
  }
}
