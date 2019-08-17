import React, { Component } from 'react'
import Computed from './Computed';
import actions from '../store/action/counter'

// 使用 react-redux 来优化使用 redux 过程, 使用 connect 来实现
// 1. 导入 connect 方法
import { connect } from 'react-redux'
// 2. 组件改成导出一个连接后的组件, connect 以后的组件,组件的状态以及变更状态的方法都从 props 中获取,为了让组件能从 props 中获取到状态和变更状态的方法,我们做一些处理

class Counter extends Component {

  render() {
    return (<div className="container">
      <button onClick={() => this.props.add(2)} >+2</button>
      <span>{this.props.num}</span>
      <h2>X :{this.props.x}</h2>
      <Computed />
    </div>)
  }
}

// connect 第一次执行的时候接收两个参数:
// 1. mapStateToProps 是个函数
let mapStateToProps = (state) => {
  // state 是 store.getState() 的返回结果
  // mapStateToProps 函数需要返回一个对象，这个对象的属性会成为组件的 props
  console.log(state)
  return {
    num: state.counter.num,
    x: state.counter.x
  }
}
// 2. mapDispatchToProps 把dispacth 映射到 props 上
let mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store.dsipatch
  // mapDispatchToProps 需要返回一个对象，这个对象里面的方法会成为组件的 props
  return {
    add (amount) {
      dispatch(actions.add(amount))
    }
  }
}
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)

// connect 后面根两个执行： 
// 第一个执行要传递两个参数
// 第二个执行传入需要被连接的组件

// mapStateToProps, mapDispatchToProps 的简化写法
// mapStateToProps 可以简化成一个箭头函数，在箭头函数通过 ... 展开state 中的数据
// mapDispatchToProps 可以简化成 action 对象，此时 actionCreator 中的属性名就成了组件的 props
export default connect(state => ({...state.counter}), actions )(Counter)