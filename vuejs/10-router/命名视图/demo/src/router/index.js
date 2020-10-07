import Vue from 'vue'
import VueRouter from 'vue-router'

const Foo = () => import( /* webpackChunkName: "group-home" */ '../views/Foo.vue')
const Bar = () => import( /* webpackChunkName: "group-foo" */ '../views/Bar.vue')
const Baz = () => import( /* webpackChunkName: "group-foo" */ '../views/Baz.vue')


Vue.use(VueRouter)

const routes = [{
  path: '/',
  components: {
    default: Foo,
    a: Bar,
    b: Baz
  }
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router