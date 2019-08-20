import React, { Component } from 'react'

export default class Password extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      password: ''
    }
  }
  componentWillMount () {
    this.setState({
      password: localStorage.getItem('password')
    })
  }
  render() {
    return (<div>
      <input type="text" value={this.state.password} onChange={() => {}}/>
    </div>)
  }
}
