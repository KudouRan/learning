<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 路由视图 -->
    <router-view></router-view>
    <!-- 路由连接 -->
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
