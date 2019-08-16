import React from 'react'
import ReactDOM from 'react-dom'

// React.createElement() 方法用户创建虚拟 DOM 的, 而 jsx 语法中, jsx 元素就是虚拟 DOM , jsx 语法就是 createElement 的语法糖

let ele = (<h1 x="1" y="2">
  hello
  <span s="1">1</span>
  <span>2 <i>ok</i></span>
</h1>);

// jsx 是 React.createElement() 的语法糖, 我们用 createElement 也可以构建虚拟 DOM

let eleByCreateElement = React.createElement(
  'h1',
  { x: 1, y: 2},
  'hello',
  React.createElement('span', { s: 1 }, 1),
  React.createElement('span', null, 2, React.createElement('i', null, 'ok'))
)
// React.createElement(type, props, children)
// type: 标签名
// props: type 的行内属性,是一个对象,如果没有行内属性,写null
// children: 从第三个参数起, 就是 type 的子节点, 如果子节点还有元素,则继续调用 createElement 方法


ReactDOM.render(eleByCreateElement, document.getElementById('root'))