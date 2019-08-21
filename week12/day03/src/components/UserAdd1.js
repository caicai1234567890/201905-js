import React, { Component } from 'react'

export default class UserAdd extends Component {
  addInfo = () => {
    let listInfo = [{
      id: Math.floor(Math.random * 100),
      name: 'lisi'
    }]
    localStorage.setItem('list', )
  }
  render () {
    return (<div className="">
        <input type="text" className="form-control"/>
        <button className="btn btn-danger" onClick={() => {
          
        }}>增加</button> 
      </div>)
  }

}

