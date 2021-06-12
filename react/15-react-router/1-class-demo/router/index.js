import {
  BrowserRouter as Router, //使用history模式
  Link,
  Route, //路由线路
  Switch,
  Redirect, //重定向
} from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import News from '../pages/News';
import Profile from '../pages/Profile';

export default function AppRouter() {
  return (
    <Router>
      <h1>路由测试页面</h1>
      <ul>
        <li>
          <Link to="/">回主页</Link>
        </li>
      </ul>
      <Switch>
        {/* exact 精准匹配，不加所有 / 开头页面都会跳转到 / 路径 */}
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
