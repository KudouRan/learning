import Vue from 'vue'
import App from './App.vue'
import router from "./router"

Vue.config.productionTip = false

//导入并使用路由
new Vue({
  render: h => h(App),
  router
}).$mount('#app')