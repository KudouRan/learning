<template>
  <div id="app">
    <router-view></router-view>
    <button @click="homeClick">点击到达首页</button>
    <button @click="aboutClick">点击到达关于</button>
  </div>
</template>

<script>
export default {
  //使用编程式导航
  name: "app",
  methods: {
    homeClick() {
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    }
  }
};
</script>

<style>
</style>