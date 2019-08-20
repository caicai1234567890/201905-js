import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action/todo'
import Listitem from './ListItem';

 class TodoList extends Component {
  constructor (props, context) {
    super ()
  }
  filterTodo () {
    switch(this.props.filter) {
      case 'all':
        return this.props.list
      case 'unfinished':
        return this.props.list.filter(item => !item.isSelected)
      case 'finished':
        return this.props.list.filter(item => item.isSelected)
    }
  }
  render() {
    return (<ul className="list-group">
      {
        this.filterTodo().map((item ) =>  <Listitem key={item.id} item={item} changeSelected={this.props.changeSelected} deleteTodo={this.props.deleteTodo}/>)
      }
      
    </ul>)
  }
}

export default connect(state => ({...state}),actions)(TodoList)