<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{path:'/home'}" active-class="active">Home</router-link>|
      <router-link to="/about" tag="button">About</router-link>|
      <router-link :to="{ name: 'User', params: { userId }}">用户界面</router-link>|
      <!-- <button @click="profileClick">个人档案</button> -->
      <router-link :to="{path:'/profile',query:{name:'catlair',age:18,height:1.99}}">个人档案</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    userId() {
      return "123";
    }
  },
  methods: {
    /* profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "catlair",
          age: 18,
          height: 1.99
        }
      });
    }  */
  }
};
</script>
<style>
a:visited {
  color: blue;
}
a.link-active {
  color: turquoise;
}
a.active {
  background-color: aquamarine;
}
</style>
