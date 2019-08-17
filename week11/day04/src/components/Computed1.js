import React, { Component } from 'react'
import store from '../store1'

export default class Computed extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      num : store.getState().num
    }

  }
  componentDidMount () {
    // store.subscribe(handler) 会返回取消该订阅的方法,当需要取消订阅的时候执行这个方法就可以了
    this.unsub = store.subscribe(() => {
      this.setState({
        num: store.getState().num
      })
    })
  }
  componentWillUnmount () {
    // 一般在组件将要销毁的时候取消订阅
    this.unsub()
  }
  render() {
    return (<div>
      {this.state.num %2 === 0 ? '偶数' : '奇数'}
    </div>)
  }
}
