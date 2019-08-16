import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 用 class 声明组件
// 1. 声明 class 时要继承 react 上的 Component 类
// 2. 在这个类的原型上，需要有一个 render 方法，这个 render 方法要返回一个根 jsx 元素
// 3. 用 class 声明的组件， 声明后就可以当成一个标签使用

class Header extends Component{
  constructor (props) {
    super() // extends 一个类以后，可以不写 constructor, 如果写了必须执行一次 super()  
    // 用 class 声明的组件，同样可以使用 props , 但是在构造函数中， 构造函数的第一个形参就是 props, 在构造函数中通过形参访问 props
    console.log(props)
    // 除了构造函数以外的其他地方，通过 this.props
  }

  render () {
    return (<h1>
      {/* Hello Component By Class Statement */}
      {this.props.content}
      </h1>)
  }
}

class Hello extends Component {
  constructor (props, context) {
    super ()
  }

  render () {
    return (<div>
      {/* 今天好热 */}
      <Header content="好热" />
      <Header content="天气不错" />
      <p>
        {this.props.date}
      </p>
      <div>React diertian </div> 
    </div>)
  }
}
// ReactDOM.render(<Header x="1" z="abc"/> , document.getElementById('root'))

ReactDOM.render(<Hello date={new Date().toLocaleTimeString()} />, document.getElementById('root'))

// ReactDOM.render() 渲染 class 声明的组件过程
// 1. 找到对应的类，并且 new 一下这个类， 并且获得这个类实例
// 2. 通过实例找到当前当前类的 render 函数， 让 render 执行并接收其返回的虚拟的 DOM
// 3. 将上一步的虚拟 DOM 转化成真实的 DOM, 然后插入到页面中


// function 和 class 声明的组件有什么区别
// React 也是数据驱动的， React 组件的数据来源有两个： props(属性) 和 state(状态)
// 用 class 声明的组件， 有 state 和 props , this , 生命周期的钩子
// 而 function 声明的组件只有 props

// props 是在组件被使用的时候写在行内的属性， 是从外部传给组件的数据
// state 是用 class 声明的组件私有的数据， 需要定义组件时要声明的状态

// props 和 state 都是组件的数据来源，如果 props 或者 state 发生变化， 对应的视图会自动更新
