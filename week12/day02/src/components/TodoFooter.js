import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action/todo'

class TodoFooter extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    let { filter, changeCurrentFilter } = this.props
    return (<nav className="nav nav-pills" onClick={(e) => changeCurrentFilter(e.target.dataset.type)}>
        <li className={filter === 'all' ? 'active' : ''}>
          <a data-type="all">全部</a>
        </li>
        <li className={filter === 'unfinished' ? 'active' : ''}>
          <a data-type="unfinished">未完成</a>
        </li>
        <li className={filter === 'finished' ? 'active' : ''}>
          <a data-type="finished">已完成</a>
        </li>
    </nav>)
  }
}

export default connect(state => ({...state}), actions)(TodoFooter)