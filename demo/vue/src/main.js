import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);


Vue.config.productionTip = false

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
  router
}).$mount('#app')
