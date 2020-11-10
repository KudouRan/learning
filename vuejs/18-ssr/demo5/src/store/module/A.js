export default {
  state: {
    name: 'moduleA的state',
  },
  mutations: {
    updateName(state) {
      console.log(state);
      //可以看出这里的state是局部的
      state.name += '拼接';
    },
  },
  actions: {
    testA1(context) {
      console.log('A-Action中的context:', context);
      //拥有dispatch,commit,getters,state,rootGetters,rootState
    },
  },
  getters: {
    testA2(state, getters, rootState) {
      //getters是全局的(模块的也会放到全局),而rootState你懂的
      console.log('来的A模块getters:(getters参数):', getters);
      return state.name + '和' + rootState.name;
    },
  },
};
