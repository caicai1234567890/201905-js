import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/counter'
class Counter extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<div>
      <button onClick={() => this.props.add(1)}>+1</button>
      <span>{this.props.num}</span>
      <button onClick={() => this.props.add1(2)}>+2</button>
      <button onClick={() => this.props.minus1(2)}>-2</button>
      
    </div>)
  }
}

export default connect((state) => ({...state}), actions)(Counter)