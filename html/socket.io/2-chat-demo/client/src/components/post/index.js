import React, { useState } from 'react';
import './index.scss';
import store from '../../store';

function Post() {
  const [counter, setCounter] = useState(store.getState().counter);

  store.subscribe(() => {
    setCounter(store.getState().counter);
  });

  return <div className="post-box">当前在线人数:{counter}</div>;
}

export default Post;
