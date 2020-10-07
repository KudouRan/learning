<template>
  <div>
    <h1>这里是{{$route.params.userId}}的用户界面</h1>
    <p>欢迎你来到{{userId}}的用户界面</p>
    <h2>params传值</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>

<style>
</style>