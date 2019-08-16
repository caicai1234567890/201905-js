
// jsx语法: React 特有的语法,是ja和html混写的语法,将组件的html结构,数据,甚至样式写在一个js文件中,最终都会被编译成js代码
// jsx是一种语法糖,目的是简化html和数据绑定的过程,提升开发效率

// jsx元素(react元素): 在jsx中长的像html元素就是jsx元素
// jsx 语法可以写在js 文件中,也可以写在.jsx文件中

// 写jsx必须把react 导入到文件中

import React from 'react'
import ReactDOM from 'react-dom'

let data = {
  name: 'lisi',
  age: 17
}
let h1 = <h1>姓名: {data.name}; 年龄: {data.age}</h1>
// 向这样,html标签和js混写就是jsx语法, h1就是一个jsx元素
console.log(h1)

// 通过ReactDOM 把jsx元素渲染到页面中



// 使用 JSX 注意事项:
// 1. jsx 通过 ReactDOM.render() 渲染到页面中, jsx 元素最外层只能有一个根节点
// 2. jsx 是 js 的扩展语法,不是 html , 写 jsx 要遵守所有的 js 语法
// 3. jsx 中可以通过 {} 使用 js 表达式,注意只能写表达式,不能写语句
function getOK () {
  return 'ok'
}
let str = 'react的第一天'
let section = <section>{str}</section>
let s2 = <section>{getOK()}</section>


// 4. jsx 元素可以使用行内属性,但是有一些特殊的属性需要改写, class 要改写成 className , label 标签的 for 改写成 htmlFor
let l1 = <label htmlFor="id">
  请输入
  <input type="text" id="id"/>
</label>

let d3 = <div className="hehe">hehe</div>

let d4 = <div style={{color: 'red', background: 'lightblue'}}> 这个style</div> // style 要写成一个对象

// 5. jsx 元素并不是真正的元素,在渲染到页面之前不能当作 DOM 元素操作, jsx 经过 babel 编译会形成普通的 js 对象,这些对象就是虚拟的 DOM

// 6. jsx 如果换行,最好用 () 包起来

let longText = (<ul className="container">
  <li className="slider">
    <img src=""></img>
  </li>
  <div>
    <span>1</span>
    <span>2</span>
  </div> 
</ul>)
ReactDOM.render(d4,document.getElementById('root'), ()=> { // 这个回调函数会在d4 渲染到页面之后被调用, 如果需要操作刚刚渲染到页面中的元素,要在这里获取和操作它 
})

// ReactDOM.render()
// 1.执行 render 的时候把 jsx 的虚拟 DOM 转换成真实的 DOM 
// 2. 把上一步 jsx 转换得到的真实的 DOM 元素插入到页面中已经存在的 DOM 元素中(例如上面 id 为 root 的 div)
// 3. 调用 render 的回调函数
