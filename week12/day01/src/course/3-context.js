
// context 是组件间共享数据的一种方式,使用 context 共享数据可以不用逐层在组件树中显示传递 props

import React, { Component } from 'react'

 class ThemeButton extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<button className={`btn btn-${this.props.theme}`}>充值</button>)
  }
}

class Toobar extends Component {
  render () {
    return <ThemeButton theme={this.props.theme}/>
  }
}

export default class App extends Component {
  render () {
    return <Toobar theme='success'/>
  }
}


