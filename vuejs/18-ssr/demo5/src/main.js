import Vue from 'vue';
import App from './App.vue';
// import router from './router';
// import store from './store';
import { createStore } from './store';
import { createRouter } from './router';

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
const router = createRouter();
const store = createStore();
const app = new Vue({
  // 根实例简单的渲染应用程序组件。
  router,
  store,
  render: (h) => h(App),
  //这里挂载是因为要使用vue-cli-service serve
  //实际使用ssr不应该挂载
}).$mount('#app');

export function createApp() {
  return { app, router, store };
}
