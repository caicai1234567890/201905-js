// 受控组件
// 双向数据绑定,受组件的 state 控制的组件,叫做受控组件
// 表单元素的 value 绑定 state 中的状态,监听表单的 onChange 事件,在表单中输入内容会改变其 value,进而触发 onChange 事件,我们在 onChange 事件中修改 state 中的状态
// 在受控组件中 state 就是单一数据源
import React, { Component } from 'react'

export default class Input extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      num: 1
    }
  }
  render() {
    return (<div>
      <input type="text" value={this.state.num} onChange={(e) => this.setState({num: e.target.value}) }></input>
      <button onClick={(e) => axios.post('/api/addUser',this.state)}></button>
    </div>)
  }
}
// 非受控组件 : 不受 state 控制的组件就叫做非受控组件,表单不再绑定 state 中的状态,受控组件通过 state 就能拿到非受控组件需要通过 DOM  操作表单的值
// React 使用 ref 获取 DOM 元素
class MyInput extends Component{
  constructor(props, context){
    super()
    this.myRef = React.createRef()
    this.youRef = null
  }

  handleCLick = () => [
    // 获取表单的 value
    // ref 的 current 属性表示被当前 ref 标识的 DOM 元素
    // console.log(this.myRef.current.value)
    // 元素的 ref 是一个函数的时候,这个 ref 就是被 ref 表示的 DOM  元素
    // console.log(this.youRef)
    // 还有一种使用字符串形式
    console.log(this.refs.myDiv)
  ]
  render() {
    return (<div>
        <input type="text" ref={this.myRef}></input>
        <input type="text" ref={(el) => this.youRef = el}></input>
        {/* el 表示当前的 DOM 元素,这个函数是在页面渲染的时候就会执行*/}
        <div ref="myDiv">uiouu</div>
        <button>输出</button>
      </div>)
  }
}

// 生命周期: 组件在实例化的时候在特定的阶段调用一系列的钩子函数(class 声名的组件才有生命周期)
class Header extends Component{
  static defaultProps = {
    num: (() => {
      return '123'
    })()
  }
  constructor(props, context){
    super()
    this.state = {
      num: 1
    }
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  render () {
    console.log('render')
    return (<div>
      {this.state.num}
      <button onCLick={() => this.setState({num: this.state.num + 1})}></button>
      <Child {...this.state}></Child>
      </div>)
  }
  componentDidMount () {
    // 启动定时器, 事件监听
    console.log('componentDidMount')
  }
  componentWillUnmount () {
    console.log('componentWillUnMount')
  }
  // 更新的钩子
  shouldComponentUpdate () {
    return true
    // 返回 true 后面的钩子必须执行,视图必须更新, return false 表示后面的钩子不用执行,视图也不会更新
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
}

class Child extends Component{
  constructor (props, context) {
    super()
  }
  // 子组件数据更新时
  componentWillReceiveProps (props) {
    // props 是更新之后的 props
    console.log(props)
  }
  shouldComponentUpdate () {
    console.log('Child shouldComponentUpdate')
    return true
  }
  componentWillUpdate () {
    console.log('Child ComponetWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  render () {
    return <div>Child{this.props.num}</div>
  }
}
// 组件实例化的过程中钩子的执行顺序: static defaultProps -> constructor -> componentWillMount -> render -> componentDidMount 

// 当父组件的数据发生变化时,执行到 render 的时候,才会触发子组件关于数据更新时的钩子

// React 是数据驱动,而 React 的数据来源有两个: props, state, 数据发生变化时, React 的组件会重新执行 render 进而更新视图


// 数据更新时的执行顺序 :
// shouldComponentUpdate -> componentWillUpdate -> render() -> componentDidUpdate

// React 轮播图