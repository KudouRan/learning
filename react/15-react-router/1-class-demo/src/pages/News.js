import React from 'react';

export default class News extends React.Component {
  hasState = () => {
    return this.props.history.location.state
      ? '传的name是:' + this.props.history.location.state.name
      : '没传name哦';
  };

  render() {
    return (
      <div>
        <p>{this.hasState()}</p>
        <p>
          {/* Link也是生成一个a标签 */}
          <a href="/profile/1">去profile/1页面(a标签)</a>
        </p>
        <p>
          {/* Link也是生成一个a标签 */}
          <a href="/profile/2">去profile/2页面(a标签)</a>
        </p>
      </div>
    );
  }
}
