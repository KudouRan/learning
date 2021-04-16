import Vue from 'vue';
import VueRouter from 'vue-router';

//1.导入组件
import Home from '../components/Home';
import About from '../components/About';

//2.使用router
Vue.use(VueRouter)

//3.配置router

const routes = [
  // {
  //   path: '',
  //   component: Home,
  //   alias: '/home'  //别名
  // },
  {
    path: '',
    redirect: '/home' //重定向
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

//4.创建路由
const router = new VueRouter({
  routes,
  mode: 'history', //配置h5的history模式
});

//5.导出路由
export default router;