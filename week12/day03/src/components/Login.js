import React, { Component } from 'react'

export default class Login extends Component {
 render () {
   return (<div>
      <div className="form-group">
        <label htmlFor="uName">用户名</label>
        <input type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={() => {
          localStorage.setItem('loginSystem', true)
          console.log(this.props)
          this.props.history.push(this.props.location.from)
        }}>登录</button>
      </div>
    </div>)
 }
}
