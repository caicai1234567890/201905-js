
import React from 'react'
import ReactDOM from 'react-dom'
// 列表渲染:  根据给定的数据,生成一组相同的数据, 在 vue 中 v-for 指令做列表渲染,

let ary = [
  {
    name: 'lisi',
    age: 16,
    title: '集团四零'
  },
  {
    name: 'zhangsan',
    age: 18,
    title: '宇宙小魔仙'
  }
]

// 用数组的 map 方法做列表渲染, 在 map 的回调函数中返回要生成多个的元素
// map 把一个数组映射成一个新数组
let lis = ary.map((item, index) => {
  return <li key={index}>姓名: {item.name} 年龄: {item.age}</li>
})

console.log(lis)
let ul = (<ul>
  {/*当使用列表渲染的结果时,只需要把结果当成普通的变量用{} 包起来  */}
  {lis}
  </ul>)

ReactDOM.render(lis, document.getElementById('root'))
