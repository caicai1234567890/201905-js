import React, { Component } from 'react'
import store from '../store/myStore'
import actions from '../store/action/counter'
import { connect } from '../store/react-redux'

class Counter extends Component {
  render() {
    return (<div>
      <button onClick={() => this.props.add(1)}>+</button>
      <span>{this.props.num}</span>
      <button onClick={() => this.props.minus(1)}>-</button>
    </div>)
  }
}

let mapStateToProps = (state) => {
  // state 是 store.getState()的返回值
  return {
    num: state.counter.num
  }
}
let mapDispatchToProps = (dispatch) => {
  // dispatch 是 store.dispatch
  return {
    add (amount) {
      dispatch(actions.add(amount))
    },
    minus (amount) {
      dispatch(actions.minus(amount))
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default connect(mapStateToProps, actions)(Counter)
