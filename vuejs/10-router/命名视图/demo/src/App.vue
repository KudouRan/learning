<template>
  <div id="app">
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>