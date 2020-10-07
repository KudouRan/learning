import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

//() => import 使用懒加载
const About = () => import('../components/About.vue');
//配置文件分组 /* webpackChunkName: "group-home" */ 
const HomeNews = () => import( /* webpackChunkName: "group-home" */ '../components/HomeNews.vue');
const HomeInfo = () => import( /* webpackChunkName: "group-home" */ '../components/HomeInfo.vue');
const User = () => import('../components/User.vue');
const Profile = () => import('../components/Profile');

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    //嵌套路由
    children: [{
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: '新闻'
        }
      },
      {
        path: 'info',
        component: HomeInfo,
        meta: {
          title: '信息'
        }
      }
    ]
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    //动态路由匹配
    path: '/user/:userId',
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '个人档案'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'link-active', //配置router-link全局class
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // let matched = to.matched[1] || to.matched[0];
  // document.title = matched.meta.title; //更新网页标题
  document.title = to.meta.title; //更新网页标题
  next(); //必须使用,意思是进行下一步
})

export default router