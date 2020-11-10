<template>
  <div id="app">
    <h1>this is vue ssr</h1>
    <div @click="clickHandle">这是一段内容</div>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandle() {
      console.log('click !!!!');
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  text-align: center;

  h1 {
    color: chocolate;
  }
  div {
    color: orange;
    background-color: deeppink;
    width: 400px;
    height: 400px;
  }
}
</style>
