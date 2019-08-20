import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/action/todo'

class TodoHeader extends Component {
  constructor (props, context) {
    super ()
  }
  filterTodo () {
    return this.props.list.filter(item => !item.isSelected).length
  }
  render() {
    return (<div>
      <h2>亲,您有{this.filterTodo()}件事没有完成</h2>
      <input type="text" className="form-control" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          this.props.addTodo(e.target.value)
          e.target.value = ''
        }
      }}/>
    </div>)
  }
}

let mapStateToProps = (state) => {
  // state 就是 getState() 的返回值
  // mapStateToProps 需要返回一个对象,这个对象中的属性将会成为组件的 props
  return {
    list: state.list,
    filter: state.filter
  }
}

let mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store.dispatch 派发 action
  // mapDispatchToProps 需要返回一个对象,这个对象中的方法都会成为组件的 props, 通过则些方法可以修改 store 中的状态
  return {
    addTodo (title) {
      dispatch(actions.addTodo(title))
    }
  }

  
}
export default  connect(mapStateToProps,mapDispatchToProps )(TodoHeader)