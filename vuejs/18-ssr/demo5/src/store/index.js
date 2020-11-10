import Vue from 'vue';
import Vuex from 'vuex';

import moduleA from './module/A';
import moduleB from './module/B';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      name: '全局的state',
    },
    mutations: {
      testG2() {
        alert('testG2___mutation被触发');
      },
    },
    getters: {
      testG1() {
        return '我是全局中的getters';
      },
    },
    actions: {},
    modules: {
      a: moduleA,
      b: moduleB,
    },
  });
}
