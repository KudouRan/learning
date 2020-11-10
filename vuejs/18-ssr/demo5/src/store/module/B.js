export default {
  namespaced: true,
  //命名空间对本来就是嵌套的state无影响
  state: {
    name: 'modulesB的state',
  },
  mutations: {},
  actions: {
    // 在这个模块中， dispatch 和 commit 也被局部化了
    // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
    testB1(context) {
      //对actions和mutations,会被命名为 模块名/函数名
      //例如这里会被命名成  b/testB1
      //使用时 dispatch('b/testB1'); mutation同理.
      //如果modules中嵌套modules就会有命名空间的继承关系,详见官网
      //大概是使用命名空间的模块(这里b)其子模块不使用,子模块就和他一样的命名方式 b/函数名
      //如果其子模块使用命名空间,那就是 b/子模块名/函数名 以此类推
      console.log('B-Action中的context:', context);
      //结构和A模块的一样
      //拥有dispatch,commit,getters,state,rootGetters,rootState
    },
    testB2(context) {
      //使用第三个参数以访问根 dispatch 或 commit
      context.commit('testG2', null, { root: true });
    },
    testB2Two(context) {
      //错误示范,报错,局部没有testG2(或者说全局没有b/testG2)
      context.commit('testG2');
    },
  },
  getters: {
    testB2(state, getters, rootState, rootGetters) {
      //getter也是如此,而rootState你懂的
      console.log('来自B模块的Getters:(rootGetters) ', rootGetters);
      return state.name + '和' + rootState.name;
    },
  },
};
