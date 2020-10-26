<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 pa-2>
        <List
        :todoList="todoList"
        @statusChange="statusChange"
        @listDel="listDel"
        ></List>
      </v-flex>
      <v-flex xs6 pa-2>
        <ListAdd
        @listAdd="listAdd"
        @editTodo="editTodo"
        ></ListAdd>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import List from "./List"
import ListAdd from "./ListAdd"

export default {
  data() {
    return {
      todoList : []
    }
  },
  components : {
    "List" : List,
    "ListAdd" : ListAdd
  },
  methods : {
    listAdd(memo){
      this.todoList.push({memo:memo,status:"created"})
    },
    statusChange(index,status){
      this.todoList[index].status = status;
    },
    listDel(index){
      this.todoList.splice(index,1)
    },
    editTodo(memo,index){
      this.todoList[index].memo = memo
    }
  }
}
</script>

<style scoped>
</style>
