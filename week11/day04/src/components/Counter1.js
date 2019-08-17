import React, { Component } from 'react'
import Computed from './Computed';
/* import * as Types from '../action-types' */
import Actions from '../store/action/counter'
import store from '../store'
window._store = store

// 创建 dispatch 需要的 action 对象的函数叫做 actionCreator
/* function add(amount) {
  return {
    type: Types.ADD,
    amount
  }
}
 */
/* function minus(amount) {
  return {
    type: Types.MINUS,
    amount
  }
} */
/* const ADD = 'ADD'
const MINUS = 'MINUS' */
// 在组件中使用 store 
// 1. 导入 store
// 2. 用 store 中的数据初始化组件的 state, store.getState 方法获取 store 中托管的数据
// 3. 当要修改数据的时候需要 dispatch action
// 4. 如果需要视图更新,或者在 store 当中的状态发生变化时有其他的操作,我们需要订阅状态的变化
export default class Counter extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      num: store.getState().counter.num
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      // 这个函数是添加到 store 更新后的订阅,当 store 中的状态更新后会执行这个函数
      // 如果要更新视图只能通过修改组件的数据方式
      this.setState({
        // 我们要把当前组件的 state 更新成 store 当中的最新值
        // 使用 combineReducers 之后获取状态需要通过命名空间
        num: store.getState().counter.num
      })
    })
  }
  componentWillUnmount () {
    this.unsub()
  }
  render() {
    // 如果某个 action 会被派发多次,用 actionCreator 可以简化代码,在需要 action 的地方调用 actionCreator 函数,并且传入 payload
    return (<div className="container">
      <button onClick={() => store.dispatch(Actions.add(2))}>+2</button>
      <button onClick={() => store.dispatch(Actions.add(1))}>+1</button>
      <span>{this.state.num}</span>
      <button onClick={() => store.dispatch(Actions.minus(3))}>-3</button>
      <Computed {...this.state}/>
    </div>)
  }
}

// 在 React 中数据的通信父子间通过 props 传递,如果数据很多不方便而且非父子组件间无能为力,为了优化这个过程我们使用 redux 托管全局数据