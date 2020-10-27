import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'; //axios 호출

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { router } from './router'
import { store } from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음

export const eventBus = new Vue({
  methods : {
    editTodo(index,memo){
      this.$emit('editTodo',index,memo)
    }
  }
})

new Vue({
  vuetify : new Vuetify(),
  render: h => h(App),
  router,
  store
}).$mount('#app')
