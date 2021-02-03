import store from '../store';
import { GLOBAL_MESSAGE, USER_CHANGE } from '../libs/var';

const socket = store.getState().socket;

const useScoket = () => {
  socket.on('connect', function () {
    console.log('链接成功');
  });

  socket.on('disconnect', function () {
    console.log('断开连接');
  });

  socket.on(GLOBAL_MESSAGE, (msg) => {
    console.log(msg);
    store.dispatch({ type: 'INPUT_MESSAGE', value: msg });
  });

  socket.on(USER_CHANGE, (msg) => {
    store.dispatch({ type: 'CHANGE_COUNT', value: msg.counter });
  });
};

export default useScoket;
