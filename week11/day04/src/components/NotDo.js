import React, { Component } from 'react'
import store from '../store'

export default class NotDo extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      num: store.getState().todo.list.length
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      this.setState({
        num: store.getState().todo.list.length
      })
    })
  }
  componentWillUnmount () {
    this.unsub()
  }
  render() {
    return (<div>
      <h1>有{this.state.num}件事未完成</h1>
    </div>)
  }
}
