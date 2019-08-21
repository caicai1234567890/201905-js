import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import MenuLink from './MenuLink'
import './test.css'
export default class User extends Component {
  render() {
    return (
       <div>
    <div className="row">
      <div className="col-md-2">
        <li><Link to='/user/add'>新增用户</Link></li>
      {/* <li><Link to='/user/list'>用户列表</Link></li>
      */}
        <MenuLink to='/user/list' label='用户列表'></MenuLink>
    </div> 
      <div className="col-md-10">
        <Route path='/user/add' component={UserAdd} ></Route>
        <Route path='/user/list' component={UserList} ></Route>
      </div>
    </div>
    </div> 
      )
    }
  }

