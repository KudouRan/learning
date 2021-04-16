import React, { useState } from 'react';
import List from './List';
import './index.scss';
import MessageInput from '../input';
import store from '../../store';
import { GLOBAL_MESSAGE } from '../../libs/var';

function Message(props) {
  const { user } = props,
    [state, setState] = useState(store.getState()),
    socket = state.socket;

  store.subscribe(() => {
    setState(store.getState());
  });

  const sendMessage = (eventName, msg) => {
    socket.emit(eventName, msg);
  };

  const updataMsg = (msg) => {
    sendMessage(GLOBAL_MESSAGE, { msg, user });
  };

  return (
    <main className="message-box">
      <div className="list">
        <List data={state.message} user={user}></List>
      </div>
      <MessageInput updataMsg={updataMsg} />
    </main>
  );
}

export default Message;
