import React, {Component } from 'react'
import ReactDOM from 'react-dom'

class Header extends Component {
  constructor (props) {
    super()
  }
  render () {
    return <h1>{this.props.content} | {this.props.x} | {this.props.num} | {this.props.ok}</h1>
  }
}

// React 组件数据来源有两个，一个是 props 另外一个是 props 
// props: 是父组件或者渲染时传入的数据， 是外部传入的
// state: 是组件私有的状态，是组件内部的
class Counter extends Component {
  constructor (props) {
    super()
    // 使用 state 需要在构造函数中初始化 state
    // 初始化 state 就是给 this.state 赋值成一个对象
    // 注意： state 里面的数据不能直接修改
    this.state = {
      num: 9,  // num 就是 Counter组件私有的状态
      x: 888
    }
  }
  add = () => {
    // 如果不做特殊处理， this 并不是当前的实例
    // 事件函数声明为箭头函数，声明为箭头函数， 箭头函数中的 this 是当前组件的实例
    // console.log(this)
    // 如果要修改 state 中的状态需要使用 this.setState() 方法， setState 有两种方法
    // 1. this.setState((prevState) => {})
    /*
    this.setState((prevState) => {
      // prevState 是修改前的状态
      // 为了更新状态，我们需要返回一个新对象, 这个新对象中需要包含新改的状态以及要更新的新值
      return {
        num: prevState.num + 1
      }
    })
    //  React 是数据驱动的， 当我们修改状态之后，我们发现视图自动更新了， react 是数据驱动的， 而 state 是它的数据， 我们更新数据后， React 会自动重新调用组件的 render 方法， 重新更新视图
    // 当 React 发现数据发生变化了，需要更新视图， React 会重新调用 render 方法重新获取虚拟 DOM，然后和原有的视图进行对比， 只更新被修改的那一部分视图，其他的视图不会更新，(DOM-diff 算法)
    /* this.setState({
      num: this.state.num + 1
    }) */

    // 2. this.setState({state: new Value})
    this.setState({
      num: this.state.num + 1
    })
  }

  render () {
    // 在 render 方法中，可以把state 的状态映射到 jsx 中，通过 this.state.xxx 的方式可以获取 state 中的 xxx 状态
    return (<div>
      {/* 此时Header 就是 Counter 的子组件， 父组件中的数据可以通过 props 传给子组件, 父组件的值发生变更的时候子组件的值也会改变 */}
      <Header content="这是计数器" {...this.state} ok={this.props.toHeader}></Header>
      <p>num: {this.state.num}</p>
      <p>X: {this.state.x}</p>
      <p>{this.props.toHeader}</p>

      {/* 给 jsx 元素绑定事件， 需要在行内写驼峰命名法 事件函数写在原型上,但是要注意处理 this 问题*/} 
      <button onClick={this.add}>加1</button>
      </div>)
  }
}

ReactDOM.render(<Counter toHeader="ok" />, document.getElementById('root'))