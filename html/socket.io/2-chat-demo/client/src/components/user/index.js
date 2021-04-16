import React from 'react';
import './index.scss';

function User(props) {
  const { user } = props;
  return <div className="user-box">{user}</div>;
}

export default User;
