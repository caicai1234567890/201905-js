import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todoitem from './TodoItem';
import actions from '../store/action'

 class TodoList extends Component {
  constructor (props, context) {
    super ()
  }
  filterItem = () => {
    switch(this.props.filter){
      case 'all':
        return this.props.list
      case 'unfinished':
        return this.props.list.filter(item => !item.isSelected)
      case 'finished':
        return this.props.list.filter(item => item.isSelected)
    }
  }
  render() {
    console.log(this.filterItem())
    return (<div>
      <ul>
        {
          this.filterItem().map( (item,index) => 
            <Todoitem item = {item} key={index}
              changeSelect = {this.props.changeSelected}
              deletTodo = {this.props.deleteToDo}
            />
          )
        }
      </ul>
    </div>)
  }
}

export default connect((state) => ({...state}),actions)(TodoList)
