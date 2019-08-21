import React, {Component } from 'react'
import { Route, Link } from 'react-router-dom'
// 当菜单选中的时候需要一些激活的样式,我们需要包装 link 组件,用我们包装后的组件来替换原有的 link

export default ({to, label}) => {
  return <Route path={to} children={(props) => {
    // Route 的 children 和 render 类似,但是 render 是在 path 匹配的时候才会执行, children 是不管路径匹配与否都会执行
    // children 也要返回一个 jsx 或者 一个组件,这个组件将会被渲染到页面中
    // props 是路由信息对象
    return <li className={props.match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </li>
  }}></Route>
}