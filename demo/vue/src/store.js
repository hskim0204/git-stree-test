import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers : [
        {id:1, name: "hoza", email:"hoza@gmail.com", password:"123456"},
        {id:2, name: "hskim", email:"hskim@gmail.com", password:"123456"}
    ],
    isLogin : false,
    isLoginError : false

  },
  mutations :{
    loginSuccess(state){
      state.isLogin = true
      state.isLoginError = false
    },
    loginFail(state){
      state.isLogin = false
      state.isLoginError = true
    }

  },
  actions :{
     login({state,commit},loginObj){
       console.log(state,commit,loginObj)
     }

  }
})
