<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <router-link to="/home/news">新闻页面</router-link>
    <router-link to="/home/info">信息页面</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log("主页创建created");
  },
  destroyed() {
    console.log("主页销毁destroyed");
  }
};
</script>
