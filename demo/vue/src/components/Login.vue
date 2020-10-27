<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
            v-model="email"
            label="이메일 입력"
            placeholder="이메일 입력"
          ></v-text-field>
          <v-text-field
              v-model="password"
              type="password"
              label="패스워드 입력"
              placeholder="패스워드 입력"
            ></v-text-field>
            <v-btn large block depressed
            @click="login('test')">로그인</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex"
export default {
  data(){
    return {
      email : null,
      password : null
    }
  },
  methods : {
     ...mapActions(["login"])
     // login(){
    //   let selectedUser = null
    //   this.allUsers.forEach((user) => {
    //     if(user.email === email) selectedUser = user
    //   });
    //   selectedUser != null ?
    //     selectedUser.password === password ? console.log("로그인 성공")
    //     :  console.log("로그인 실패")
    //     :console.log("로그인 실패")
    // console.log(mapActions(["login"]))
     // }
  }
}
</script>

<style scoped>
</style>
