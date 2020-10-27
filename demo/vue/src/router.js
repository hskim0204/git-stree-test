
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Test from './Test.vue'
import TodoHome from './components/Home.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
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
    }
 ]
});
