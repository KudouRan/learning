<template>
  <div>
    <h1>Action</h1>
    <p>点击按钮延时延时1s更新学生(异步操作)</p>
    <p>异步操作通过Action和Mutation修改</p>
    <button v-on:click="updateStu">异步添加学生</button>
  </div>
</template>

<script>
  export default {
    name: "Action",
    methods: {
      updateStu() {
        this.$store.dispatch('actionUpdateStu');
      }
    }
  }
</script>

<style scoped>
  * {
    color: cadetblue;
  }
</style>