import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import User from './components/User'
import Login from './components/Login';
import PrivateRoute from './components/Protected'
import NotFound from './components/NotFound'

ReactDOM.render(
    <HashRouter>
      <App>
      <Switch>
      
      {/* /:name 表示的是一个动态路由, 规则 / 后面根其他, 所以 /home /user /profile 都符合这个规则都别 /:name 匹配到了,此时切路由已经不管用了*/}
      {/* <Route path='/:name'   render={() => <h1>Lisi</h1>}
></Route> */}
      <Route path='/home' component={Home}></Route>
     {/* <Route path='/profile' component={Profile}></Route>
<Route path='/user' component={User}></Route> */}
    <PrivateRoute path='/user' component={User}></PrivateRoute>
      <PrivateRoute path='/profile' component={Profile}></PrivateRoute>
      <Route path='/' exact render={() => <h1>首页</h1>}></Route>
      <Route path="/login" component={Login}></Route>
      </Switch>
       <Route component={NotFound}></Route> 
      </App>
    </HashRouter>
, document.getElementById('root'));

