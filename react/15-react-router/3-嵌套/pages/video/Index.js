import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import langList from './langList';

function LangListNav(props) {
  const langList = props.list;
  const listItems = langList.map(lang => (
    <li key={lang.name}>
      <NavLink activeClassName={lang.activeClassName} to={lang.path}>
        {lang.text}
      </NavLink>
    </li>
  ));
  return (
    <ul>
      <span style={{ display: 'block' }}>二级导航</span>
      {listItems}
    </ul>
  );
}

export default function VideoPage() {
  return (
    <div>
      <nav className="top-nav">
        <LangListNav list={langList} />
      </nav>
      <div className="video-main">
        <h2>视频专区</h2>
        <p>选中我之后左边的导航栏字体会变成绿色</p>
        <div>
          {langList.map(lang => (
            <Route
              key={lang.name}
              path={lang.path}
              component={lang.component}
            />
          ))}
          {/* <Route path="/video/css" component={Css} />
          <Route path="/video/html" component={Html} />
          <Route path="/video/javascript" component={JavaScript} /> */}
        </div>
      </div>
    </div>
  );
}
