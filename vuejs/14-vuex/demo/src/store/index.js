import Vue from 'vue';
import Vuex from 'vuex';

// then had to add in ./store.js as well.
Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //类似与vue的data
    counter: 123,
    students: [
      {
        name: 'catlair',
        age: 19,
      },
      {
        name: 'demo',
        age: 12,
      },
      {
        name: 'test',
        age: 20,
      },
      {
        name: 'zhangsan',
        age: 16,
      },
    ],
    info: {
      time: 2020,
    },
  },
  getters: {
    //计算state的派生状态
    powerCounter(state) {
      //其实还可以传递第二个参数,getters,代表所有的getters
      return state.counter * state.counter;
    },
    more18stu(state) {
      return state.students.filter((s) => s.age > 18);
    },
  },
  mutations: {
    //更改state
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //这是响应式的使用例子
    //1.修改本来就有的属性
    updateCatlairName({ students }) {
      students[0].name = '修改了';
    },
    //添加新的属性
    appendCatlairSex({ students }) {
      //错误的方法
      students[0].sex = '女';
      console.log(students[0].sex);
    },
    setCatlairSex({ students }) {
      //正确的方法
      //1. 用Vue.set
      Vue.set(students[0], 'sex', '女');
      //删除也应该用Vue.delete方法,这里就不举例了

      //2. 向原对象赋值
      //这种方法对数组中的对象不起作用
      // students[0] = {...students[0],sex:'女'};
    },
    setInfo(state) {
      //这里不能使用解构赋值来获取info,不然连vue-tools都检测不了
      state.info = { ...state.info, address: '武汉' };
    },
    //下面是提交载荷的使用例子
    // updateCount(state, num) {
    //   state.counter += num;
    // },

    //大多时候载荷是对象(毕竟只能有一个参数)
    // updateCount(state, payload) {
    //   state.counter += payload.num;
    // },

    //还有一种是对象荷载的写法
    // (因为也是传递整个对象,所以mutation中的方法不变)
    updateCount(state, payload) {
      state.counter += payload.num;
    },
    aUpdateStu(state) {
      const stu = {
        name: 'mutation中',
        age: 24,
      };
      //模仿异步添加
      new Promise((resolve, reject) => {
        setTimeout(() => {
          state.students.push(stu);
          resolve();
        }, 1000);
      }).then(() => {
        setTimeout(() => {
          alert('异步添加完成');
        }, 0);
      });
    },
    updateStu(state) {
      const stu = {
        name: 'action中',
        age: 24,
      };
      state.students.push(stu);
    },
  },
  actions: {
    // actionUpdateStu(context) {
    //   setTimeout(() => {
    //     context.commit('updateStu');
    //   }, 1000)
    // }

    //下面这是配合ES6的用法,实际上getter,mutation等也能这么用
    actionUpdateStu({ commit }) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('updateStu');
          resolve();
        }, 1000);
      }).then(() => {
        setTimeout(() => {
          alert('异步添加完成');
        }, 0);
      });
      //  setTimeout(() => {
      //   commit('updateStu');
      // }, 1000);
    },
  },
  //modules单独使用个新的项目表示
  modules: {},
});
