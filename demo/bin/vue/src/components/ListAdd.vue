<template lang="html">
  <div>
    <v-textarea
      outlined
      v-model="memo"
      label="투두 리스트를 입력해 주세요"
      value=""
    ></v-textarea>
    <v-btn @click="addTodoList">투두리스트 추가</v-btn>
    <v-btn @click="editTodo">투두리스트 수정</v-btn>
</div>
</template>

<script>
import { eventBus } from '../main'

export default {
  data() {
    return {
      memo : null,
      index : null
    }
  },
  methods :{
    addTodoList(){
      this.$emit("listAdd",this.memo)
      this.memo = null
    },
    editTodo(){
      this.$emit("editTodo",this.memo,this.index)
      this.memo = null
    }
  },
  created(){
    eventBus.$on('editTodo',(index,memo) => {
      this.memo = memo
      this.index = index
    })
  }
}
</script>

<style lang="css" scoped>
</style>
