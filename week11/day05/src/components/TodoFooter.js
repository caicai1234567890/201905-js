import React, { Component } from 'react'
import actions from '../store/action'
import { connect } from 'react-redux'
 class TodoFooter extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    let type = this.props.filter
    return (<div>
      <nav className="nav nav-pills" onClick={
        (e) => {this.props.changeCurrentFilter(e.target.dataset.type)}
      }>
        <li className={type === 'all' ? 'active' : ''}><a data-type='all'>全部</a></li>
        <li className={type === 'unfinished' ? 'active' : ''}><a data-type='unfinished'>未完成</a></li>
        <li className={type === 'finished' ? 'active' : ''}><a data-type='finished'>已完成</a></li>
      </nav>
    </div>)
  }
}
export default connect((state) => ({...state}), actions)(TodoFooter)
