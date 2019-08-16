import React, { Component } from 'react'
import Computed from './Computed';

export default class Counter extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      num: 1
    }
  }
  render() {
    return (<div className="container">
      <button onClick={() => this.setState({num: this.state.num + 1})}>+</button>
      <span>{this.state.num}</span>
      <button onClick={() => this.setState({num: this.state.num - 1})}>-</button>
      <Computed {...this.state}/>
    </div>)
  }
}

// 在 React 中数据的通信父子间通过 props 传递,如果数据很多不方便而且非父子组件间无能为力,为了优化这个过程我们使用 redux 托管全局数据