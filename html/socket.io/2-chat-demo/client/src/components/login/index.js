import React, { useState } from 'react';
import './index.scss';

function Login(props) {
  const { setUserHandle } = props;

  const [user, setUser] = useState('');

  const onInputHandle = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <label style={{ display: 'inline-flex' }}>
          <span
            style={{
              color: '#000000',
              lineHeight: '40px',
              paddingRight: '10px',
            }}
          >
            请输入用户名:
          </span>
          <span style={{ height: '40px', display: 'inline-flex' }}>
            <span className="input-wrapper">
              <input
                type="text"
                value={user}
                onInput={onInputHandle}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setUserHandle(user);
                  }
                }}
              />
            </span>
            <span className="btn-wrapper">
              <button
                onClick={() => {
                  setUserHandle(user);
                }}
              >
                登录
              </button>
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default Login;
