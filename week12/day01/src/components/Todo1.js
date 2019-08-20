import React, { Component } from 'react'
import store from '../store'
import actions from '../store/action/todo'
export default class Todo extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      ...store.getState()
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      this.setState({
        ...store.getState()
      })
    })
  }
  componentWillUnmount () {
    this.unsub()
  }
  render() {
    return (<div>
      <input type="text" onKeyDown= {(e) => {
        if (e.keyCode === 13) {
          store.dispatch(actions.addTodo(e.target.value))
          e.target.value = ''
        }
      }}/>
      <ul>
        {
          this.state.list.map((item,index) => <li key={item.id}>{item.title}</li>)
        }
      </ul>
    </div>)
  }
}
