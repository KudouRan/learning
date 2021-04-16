<template>
  <div>
    <h1>This is a profile page</h1>
    <h2>用户信息如下:</h2>
    <ul>
      <li>姓名:{{$route.query.name}}</li>
      <li>年龄:{{$route.query.age}}</li>
      <li>身高:{{$route.query.height}}</li>
    </ul>
    <h2>query传值</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
li {
  font-size: 28px;
  list-style-type: none;
}
</style>