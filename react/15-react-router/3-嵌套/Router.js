import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/Index';
import News from './pages/news/Index';
import Video from './pages/video/Index';

function AppRouter() {
  return (
    <Router>
      <div className="container">
        <nav className="one-nav">
          <h1>一级导航栏</h1>
          <ul>
            <li>
              <NavLink activeClassName="red" to="/">
                首页
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#008c8c' }} to="/video">
                视频
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="red"
                activeStyle={{ background: '#008c8c' }}
                to="/news"
              >
                新闻
              </NavLink>
            </li>
          </ul>
        </nav>
        <main>
          {/* video别精准匹配,否则匹配不到/video/... */}
          {/* 不加 exact 所有路由前面都会渲染 Home 组件 */}
          <Route exact path="/" component={Home}></Route>
          <Route path="/video" component={Video}></Route>
          <Route path="/news" component={News}></Route>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
