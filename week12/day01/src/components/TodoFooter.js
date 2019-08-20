import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action/todo'

class TodoFooter extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    let { filter } = this.props
    return (<nav className="nav nav-pills" onClick={(e) => {
      // dataset 是h5 新增的获取元素 data- 开头的行内属性值, dataset 是一个对象,属性名是不含 data- 的属性名
      console.log(e.target.dataset)
      this.props.changeCurrentFilter(e.target.dataset.type) } }>
      <li className={filter==='all' ? 'active' : ''}>
        <a data-type="all">全部</a>
      </li>
      <li className={filter==='unfinished' ? 'active' : ''}>
        <a data-type="unfinished">未完成</a>
      </li>
      <li className={filter==='finished' ? 'active' : ''}>
        <a data-type="finished">已完成</a>
      </li>
    </nav>)
  }
}
export default connect(state => ({...state}), actions)(TodoFooter)