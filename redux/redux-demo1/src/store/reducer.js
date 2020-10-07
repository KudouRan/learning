const defaultState = {
  inputValue: '',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Man charged over missing wedding girl.',
  ],
};
export default (state = defaultState, action) => {
  let newState = {};
  switch (action.type) {
    case 'changeInputValue':
      newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    case 'addItem':
      newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case 'removeItem':
      newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
};
