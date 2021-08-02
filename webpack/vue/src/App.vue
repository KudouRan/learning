<template>
  <div id="app">
    <h2>哈哈哈</h2>
    <p>hahahhhhhhhhhhhhhhhhhh</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    throw new Error('测试')
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
