import React, {Component } from 'react'
import ReactDOM from 'react-dom'

// React 的生命周期的钩子函数 (只有用 class 生命)
class Parent extends Component{
  // constructor 和 render 都是生命周期的函数
  // 在 constructor 执行之前会先执行 静态方法, 给当前组件设置默认值,发生在实例化之前
  static defaultProps = {
    name: (() => {console.log('static Default')})
  }
  constructor(props, context){
    super()
    this.state = {
      num : 1
    }
    console.log('constructor')
  }
  componentWillMount () {
    // 组件挂载前
    console.log('componentWillMount')
  }
  componentDidMount () {
    // 组件挂载后执行
    console.log('componentDidmount')
  }
  componentWillUnmount () {
    // 组件销毁或者卸载之前执行: 我们一般在这里面清除定时器解绑事件
  }
  // 以下的钩子是在数据发生变化时触发
  shouldComponentUpdate () {
    // 当组件的数据发生变化的时候会先执行这个钩子,如果这个函数 return true 才会执行后面的钩子并且更新视图,如果 return false 则不更新视图
    // 这个钩子如果写了就要 return true 或者 false , 如果不 return 就会触发警告报错,后面的视图也不会更新
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate () {
    // 将要更新,在更新视图之前即 render 执行之前执行
    console.log('willUpdate')
  }
  componentDidUpdate () {
    // 在视图更新之后执行
    console.log('didUpdate')
  }
  handleAdd = () => {
    this.setState({
      num : this.state.num + 1
    })
  }
  render () {
    console.log('render')
    return (<div>
      <p>{this.state.num}</p>
      <button onClick={this.handleAdd}>加加</button>
      <Child x={this.state.num}></Child>
    </div>)
  }
}

// 组件的数据更新时钩子的执行顺序
// shouldComponentUpdate -> componentWillUpdate -> render -> 子组件的 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> componentdidUpdate -> 父组件的 componentDidUpdate 
// 子组件的更新数据的钩子式在父组件的 render 执行后执行
class Child extends Component{
  // 以下钩子除了 render 在组件初始化的时候不会执行, 当组件的数据发生变化的时候才会执行
  componentWillReceiveProps (props) {
    console.log('子组件',props)
    // props 是更新以后的属性
  }
  shouldComponentUpdate () {
    console.log('子组件', 'shouldupdate')
    return true
  }
  componentWillUpdate () {
    console.log('子组件', 'willupdate')
  }
  componentDidUpdate () {
    console.log('子组件','didupdate')
  }
  render () {
    return (<p>子组件{this.props.x}</p>)
  }
}
// 组件初始化的时候执行钩子顺序: static 方法 -> constructor -> componentWillMount -> render -> componentDidMount
ReactDOM.render(<Parent />, document.getElementById('root'))