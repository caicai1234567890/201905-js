// React 是支持组件化开发的，在 React 的组件中， JSX 元素是基本组成单位
// 在 React 中有两种定义组件的方式： 
// 1. 函数 (function) 定义组件
// 2. 类 (class) 定义组件
import React from 'react'
import ReactDOM from 'react-dom'

// 函数定义组件
// 定义函数组件需要注意： 
// 1. 函数名要大写，为了有别于原生的 html 标签
// 2. 在函数中要返回一个根 JSX 元素
// 3. 定义组件以后，这个组件的名字就可以当成 html 标签使用了

function Welcome (props) {
  console.log(props)
  return <h1>{props.x}</h1>
}

// 用函数生命组件， 创建一个函数；
// 函数接收一个形参， props , props 是一个对象数据类型的， 其中包含在渲染该组件或者父组件在使用该组件的时候在行内传入的 props
// 函数需要返回一个根 JSX 元素
// 把组件渲染到页面中同样需要 render 方法
let ary = [1, 2, 3]
ReactDOM.render(<Welcome w = {ary}x="1" y="2" z="3"/>, document.getElementById('root'))

// ReactDOM.render() 会根据第一个参数的不同，采取不同的操作
// 1. 如果第一个参数是一个组件，它会首先把组件的行内属性打包成一个对象
// 2. 执行组件函数并且传递获取上一步 打包出来的 props 对象， 并且获取组件函数返回的虚拟 DOM 对象
// 3. 把虚拟 DOM 转换成真实的 DOM 并且插入到页面中
