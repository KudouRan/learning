import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import socket from './libs/socket';

socket();

ReactDOM.render(<App />, document.getElementById('root'));
