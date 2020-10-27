import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Test from './Test.vue'
import TodoHome from './components/Home.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

Vue.use(VueRouter)

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods : {
    editTodo(index,memo){
      this.$emit('editTodo',index,memo)
    }
  }
})

const router = new VueRouter({
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

new Vue({
  vuetify : new Vuetify(),
  render: h => h(App),
  router
}).$mount('#app')
