import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development';

const app = new Vue({
  store,
  render: function(h) {
    return h(App);
  },
}).$mount('#app');

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
