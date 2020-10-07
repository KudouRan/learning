<template>
  <div>
    <h2>这是新闻页面</h2>
    <ul>
      <li>新闻1</li>
      <li>新闻2</li>
      <li>新闻3</li>
      <li>新闻4</li>
      <li>新闻5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNew",
  created() {
    console.log("新闻页创建created");
  },
  destroyed() {
    console.log("新闻页销毁destroyed");
  }
};
</script>

<style scoped>
</style>