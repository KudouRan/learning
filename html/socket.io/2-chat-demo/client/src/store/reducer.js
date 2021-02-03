import io from 'socket.io-client';

const defaultState = {
  socket: io('http://localhost:3000'),
  message: JSON.parse(localStorage.getItem('message') || '[]'),
  counter: 0,
};

function reducer(state = defaultState, action) {
  let newState = {};
  switch (action.type) {
    case 'INPUT_MESSAGE':
      newState = { ...state };
      newState.message.push(action.value);
      localStorage.setItem('message', JSON.stringify(newState.message));
      return newState;
    case 'CHANGE_COUNT':
      newState = { ...state };
      newState.counter = action.value;
      return newState;
    default:
      return state;
  }
}

export default reducer;
