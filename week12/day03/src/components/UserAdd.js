import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

export default class UserAdd extends Component {
  constructor(props,context){
    super()
    this.state = {
      show: false
    }
  }
  addInfo = () => {
    let listInfo = [{
      id: Math.floor(Math.random * 100),
      name: 'lisi'
    }]
    localStorage.setItem('list', )
  }
  render () {
    return (<div >
      {/* Prompt 组件接收两个属性*/}
      {/* 
        when: 是一个布尔值, 如果为 true, 切换路由就会提示,如果为 false 就不提示
        message: 是一个函数,函数接收一个 location, 这个 location 是它要去往的路由对象
      */}
      <Prompt when={this.state.show} message={(location) => `确定要去 ${location.pathname}`}></Prompt>
        <input type="text" className="form-control"
        onChange={(e) => {
          if (e.target.value.length) {
            this.setState({
              show: true
            })
          }
        }}
        />
        <button className="btn btn-danger" onClick={() => {
          // setState() 是异步的,所以等 show 变为 false 以后再跳走,所以我们要把切换路由写在 setState 的回调中
          this.setState({
            show: false
          }, () => {
            this.props.history.push('/user/list')
          })
        }}>增加</button> 
      </div>)
  }

}

