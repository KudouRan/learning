import React from 'react';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>用户id:{this.props.match.params.id}</h1>
        <p>
          <button
            onClick={() => {
              this.props.history.replace('/');
            }}
          >
            跳转到首页(使用的replace)
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            返回页面
          </button>
        </p>
      </div>
    );
  }
}
