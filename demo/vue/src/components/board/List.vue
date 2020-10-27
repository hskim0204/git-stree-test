<template>
  <div>
    <h2>???</h2>
    <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
    <input v-model="serverDateTime"/>
  </div>
</template>

<script>
export default {

    data() {
      return  {
        serverDateTime : null
      }
    },
  methods:{
		getList() {
			this.$axios.get("http://localhost:8080/board")
			.then((res)=>{
				console.log(res);
        this.serverDateTime = res.data
			})
			.then((err)=>{
				console.log(err);
			})
		}
	}
}
</script>

<style scoped>
</style>
