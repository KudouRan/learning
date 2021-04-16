<template>
  <div>
    <h2>A模块的name:</h2>
    <p>{{aName}}</p>
    <button @click="updateName">点击修改A模块的name</button>
    <h2>A模块的action测试,点击后看控制台</h2>
    <button @click="testA1">点击</button>
    <h2>A模块的getters测试</h2>
    <p>{{$store.getters.testA2}}</p>
  </div>
</template>

<script>
  export default {
    name: "A",
    methods: {
      updateName() {
        //mutations和active的使用倒是没变
        this.$store.commit('updateName');
      },
      testA1() {
        this.$store.dispatch('testA1');
      }
    },
    computed: {
      aName() {
        //注意这里的写法
        return this.$store.state.a.name;
      }
    }
  }
</script>

<style scoped>

</style>