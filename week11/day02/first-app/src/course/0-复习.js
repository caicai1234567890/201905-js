
import React from 'react'
import ReactDOM from 'react-dom'

// 1. jsx 语法: js 和 html混写的语法
let data = {
  name: 'lisi',
  age: 18
}

let h1 = <h1 className="h1">{data.name}</h1>

// 使用 jsx 的注意事项
// 1. jsx 本质是 js, 需要遵循所有的 js 的语法规范
// 2. 如果在 jsx 中使用 js 变量或者表达式,需要使用 {变量或者表达式}
// 3. 花括号中只能写表达式(变量, 三元表达式,函数执行, 数学表达式)不能写语句
// 4. jsx 元素也可以写行内属性,但是有几个属性需要特殊处理, 但是 class 是 js 的关键字,需要改写为 className , label 标签的 for 要改写成 htmlFor , style 需要写成一个对象
// 5. jsx 元素并不是真正的 DOM , 在被渲染到页面之前都是虚拟的 DOM , 不能直接操作, 虚拟 DOM 就是普通的 JS 对象

// 列表渲染和条件渲染
// 列表渲染使用数组的 map 方法
let fruits = [
  {
    name: '苹果',
    color: ['red', 'green', 'yellow']
  },
  {
    name: '香蕉',
    color: ['green', 'yellow', 'black']
  },
  {
    name: '芒果',
    color: ['yellow', 'green']
  }
]

let ul2 = (<ul>
  {
    fruits.map((fruit, fIndex) => {
      return (<li key={fIndex}>
      {fruit.name}
        <ul>
            {fruit.color.map((color, Cindex) => {
              return (<li key={Cindex}>{color}</li>)
            })}
        </ul>
      </li>)
    })
  }  
</ul>)

// 列表渲染有一个前提, 需要不使用列表渲染, HTML 结构改写成什么样子
// 培养数据映射视图的能力,看到html结构要考虑数据结构该长成什么样,看到数据结构,要想到渲染成html长什么样

// 条件渲染: 根据条件成立与否生成不同的 html 结构, react 的条件渲染需要使用 if -else 或者其他的条件表达式或者语句
/* let isLogin = true
if (isLogin) {
  tag = <h1>{nickname}</h1>
} else {
  tag = <h1>请登录</h1>
}
 */
// React.createElement(type, props, ...children)
// type: 标签名
// props: type 的行内属性
// children: type 的子节点

let ele = (<h1 x="1" y="2">
hello
<span s="1">1</span>
<span>2</span>`
</h1>)

let eleCreateElement = React.createElement(
  'h1',
  '{ x: 1, y: 2 }',
  'hello',
  React.createElement(
    'span',
    { s: 1 },
    '1'
  ),
  React.createElement(
    'span',
    null,
    '2'
  )
)
// ReactDOM.render(eleCreateElement, document.getElementById('root'))