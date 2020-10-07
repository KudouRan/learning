import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import News from '../pages/News';
import Profile from '../pages/Profile';

//1.重定向
//2.404匹配
//3.精准匹配
//4.路由也对应vue的两种模式,history(BrowserRouter)和hash(HashRouter)

export default function () {
  return (
    <Router>
      <h1>路由测试页面</h1>
      <ul>
        <li>
          <Link to="/">回主页</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home">
          <Redirect to="/"></Redirect>
        </Route>
        <Route path="/news" component={News}></Route>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}
