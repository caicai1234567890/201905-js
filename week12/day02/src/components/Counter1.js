import React, { Component } from 'react'
import store from '../store/myStore'
import actions from '../store/action/counter'

export default class Counter extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      num: store.getState().counter.num
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      this.setState({
        num: store.getState().counter.num
      })
    })
  }
  componentWillUnmount () {
    this.unsub()
  }
  render() {
    return (<div>
      <button onClick={() => store.dispatch(actions.add(1))}>+</button>
      <span>{this.state.num}</span>
      <button onClick={() => store.dispatch(actions.minus(1))}>-</button>
    </div>)
  }
}
