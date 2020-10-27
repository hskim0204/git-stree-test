import Vue from 'vue'
const Home = () => import(/* webpackChunkName "Home" */ './components/HelloWorld.vue')
import VueRouter from 'vue-router'
const Test = () => import(/* webpackChunkName "Test" */ './Test.vue')
const TodoHome = () => import(/* webpackChunkName "TodoHome" */ './components/Home.vue')
const Login = () => import(/* webpackChunkName "TodoHome" */ './components/Login.vue')
const Board = () => import(/* webpackChunkName "TodoHome" */ './components/board/List.vue')

Vue.use(VueRouter)

Vue.config.productionTip = false

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

      {
        path: '/todoHome',
        name: 'todoHome',
        component: TodoHome
      },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
  {
    path: '/board',
    name: 'board',
    component: Board
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
 ]
});
