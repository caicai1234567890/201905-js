import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action'
class TodoHeader extends Component {
  constructor (props, context) {
    super ()
  }
  getUnfinished = () => {
    // 获取未处理事项的条数， 从状态中的 list 中过滤出 isSelected 为 false 项，求出个数
    return this.props.list.filter( item => !item.isSelected).length
  }
  render() {
    return (<div>
      <h2>亲，你还有{this.getUnfinished()}事没有完成</h2>
      <input type="text" className="form-control" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          this.props.addToDO(e.target.value)
          e.target.value = ''
        }
      } 
      } />
    </div>)
  }
}

export default  connect(state => ({...state}), actions)(TodoHeader)