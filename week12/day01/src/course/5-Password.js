import React, { Component } from 'react'

export default class Password extends Component {
  constructor (props, context) {
    super ()
    this.state = {
      password: ''
    }
  }
  componentWillMount () {
    let val = localStorage.getItem('password')
    this.setState({
      password: val
    })
  }
  render() {
    return (<div>
      <input type="text" value={this.state.password} onChange={() => {}} ></input>
    </div>)
  }
}
