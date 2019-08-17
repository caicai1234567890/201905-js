import React, { Component } from 'react'

import { connect } from 'react-redux'
class Computed extends Component{
  render() {
    return (<div>
      {this.props.num %2 === 0 ? '偶数' : '奇数'}
    </div>)
  }
}


export default connect(state => ({...state.counter.num}) )(Computed)
