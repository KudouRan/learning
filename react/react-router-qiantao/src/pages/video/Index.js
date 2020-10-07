import React from 'react';
import { Route, Link } from 'react-router-dom';
import Css from './Css';
import Html from './Html';
import JavaScript from './JavaScript';

export default function () {
  return (
    <div>
      <nav className="top-nav">
        <ul>
          <li>
            <Link to="/video/css">css教程</Link>
          </li>
          <li>
            <Link to="/video/html">html教程</Link>
          </li>
          <li>
            <Link to="/video/javascript">javascript教程</Link>
          </li>
        </ul>
      </nav>
      <div className="video-main">
        <h2>视频专区</h2>
        <p>选中我之后左边的导航栏字体会变成绿色</p>
        <div>
          <Route path="/video/css" component={Css} />
          <Route path="/video/html" component={Html} />
          <Route path="/video/javascript" component={JavaScript} />
        </div>
      </div>
    </div>
  );
}
