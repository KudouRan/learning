import React, { useState } from 'react';
import './index.scss';

function MessageInput(props) {
  const { updataMsg } = props;
  const [message, setMessage] = useState('');

  const inputMsg = (e) => {
    setMessage(e.target.value);
  };

  const onButtonChange = () => {
    if (!message) return;
    const msg = message.trim();
    updataMsg(msg);
    setMessage('');
  };

  return (
    <div
      className="message-input-box"
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onButtonChange();
        }
      }}
    >
      <textarea value={message} onInput={inputMsg}></textarea>
      <button onClick={onButtonChange}>发送</button>
    </div>
  );
}

export default MessageInput;
