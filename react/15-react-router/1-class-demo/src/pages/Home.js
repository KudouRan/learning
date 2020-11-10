import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/news">去news页面(Link)</Link>
        </p>
        <p>
          {/* Link也是生成一个a标签 */}
          <a href="/profile/1">去profile/1页面(a标签)</a>
        </p>
        <p>
          {/* NavLink支持active属性,比如activeClassName,这里暂时演示不了,在嵌套路由中演示 */}
          <NavLink to="/profile/2">去profile/2页面(NavLink)</NavLink>
        </p>
        <p>
          <button
            onClick={() =>
              this.props.history.push({
                pathname: '/news',
                state: {
                  name: '小鱼',
                },
                search: '?demo=fish',
              })
            }
          >
            去news页面(通过函数跳转)
          </button>
        </p>
      </div>
    );
  }
}
