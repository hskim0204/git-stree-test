<template lang="html">
  <div>
    <v-card
    :class="{'done': todo.status === 'done'}"
    v-for = "(todo,index) in todoList"
    :key="index"
    ><p>{{todo.memo}}</p>
    <v-btn
      v-if="todo.status === 'created'"
      @click="$emit('statusChange',index,'done')"
        x-large
        dark>
    한일
    </v-btn>
    <v-btn
      v-else
      @click="$emit('statusChange',index,'created')"
      >부활
    </v-btn>
    <v-btn
    @click="$emit('listDel',index)"
    >삭제</v-btn>
    <v-btn
      v-if="todo.status === 'created'"
      @click="editTodo(index, todo.memo)"
        x-large
        dark>
    수정
    </v-btn>
  </v-card>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  props:["todoList"],
  methods : {
    editTodo(index, memo){
      eventBus.editTodo(index, memo)
    }
  }
}
</script>

<style scoped>
.done {
  background-color: rgba(0,0,0,0.1)
}
</style>
