import React, { Component } from 'react'

export default class Todoitem extends Component {
  constructor (props, context) {
    super ()
  }
  handleClick = (id) => {
    this.props.changeSelect(id)
  }
  render() {
    let { item } = this.props
    return (
      <li className="list-group-item">
        <input type="checkbox" 
        onChange = {() => this.handleClick(item.id)}
        checked = {item.isSelected}
        />
        {item.title}
        <button className="btn btn-sx pull-right" onClick={() => this.props.deletTodo(item.id) }>&times;</button>  
      </li>
    )
  }
}
