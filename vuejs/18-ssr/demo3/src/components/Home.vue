<template>
  <div>
    <h4 v-show="isShow">helloworld</h4>
    <button @click="tabIsShow">点击显示隐藏</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    tabIsShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
h4 {
  color: #008c8c;
}
</style>
