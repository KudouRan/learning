<template>
  <div>
    <h4>About</h4>
    <p>访问的是:/about/{{ $route.params.id }}</p>
    <button @click="clickHandle">点加一下打印</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandle() {
      console.log('router', this.$router);
      console.log('route', this.$route);
      console.log('options', this.$options);
    },
  },
};
</script>

<style scoped></style>
