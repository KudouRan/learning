import './assets/css/normalize.css';
import './App.scss';

import Message from './components/message';
import User from './components/user';
import Post from './components/post';
import Login from './components/login';
import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    //为了实验所以得临时存储
    setUser(sessionStorage.getItem('user'));
  }, []);

  function setUserHandle(user) {
    setUser(user);
    sessionStorage.setItem('user', user);
  }

  return (
    <>
      <div className="App">
        <div className="message-wrapper">
          <Message user={user}></Message>
        </div>
        <div className="sidebar-wrapper">
          <User user={user}></User>
          <Post></Post>
        </div>
      </div>
      {user ? '' : <Login setUserHandle={setUserHandle} />}
    </>
  );
}

export default App;
