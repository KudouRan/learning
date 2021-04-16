<template>
  <div>
    <h1>Mutations</h1>
    <!-- 这里只是直接写了,建议使用计算属性 -->
    <p>我和State组件共用一个counter</p>
    <h2>{{ $store.state.counter }}</h2>
    <!-- 下面不提倡 -->
    <!-- 官方:因为我们应该确切知道state的改变 -->
    <!-- <button @click="$store.state.counter--">-</button>
    <button @click="$store.state.counter++">+</button>-->

    <button @click="updateCount(-6)">-6</button>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="updateCount(5)">+5</button>

    <hr />
    <p>验证响应式</p>
    <button @click="updateCatlairName">修改catlair名字</button>
    <button @click="appendCatlairSex">非响应增加性别</button>
    <button @click="setCatlairSex">响应增加性别</button>
    <button @click="setInfo">测试ES解构</button>
    <hr />

    <p>直接使用mutation进行异步操作</p>
    <button v-on:click="updateStu">异步添加学生</button>
  </div>
</template>

<script>
export default {
  name: "Mutations",
  methods: {
    decrement() {
      this.$store.commit("decrement");
    },
    increment() {
      this.$store.commit("increment");
    },
    //这是响应式的使用例子
    updateCatlairName() {
      this.$store.commit("updateCatlairName");
    },
    //非响应
    appendCatlairSex() {
      this.$store.commit("appendCatlairSex");
    },
    //响应式
    setCatlairSex() {
      this.$store.commit("setCatlairSex");
    },
    setInfo(){
      this.$store.commit('setInfo');
    },

    //下面是提交载荷的使用例子
    // updateCount(num) {
    //   this.$store.commit('updateCount', num);
    // },

    //大多时候载荷是对象(毕竟只能有一个参数)
    // updateCount(num) {
    //   this.$store.commit('updateCount', {num});
    // },

    //还有一种是对象荷载的写法
    // (因为也是传递整个对象,所以mutation中的方法不变)
    updateCount(num) {
      this.$store.commit({
        type: "updateCount",
        num
      });
    },
    updateStu() {
      this.$store.commit("aUpdateStu");
    }
  }
};
</script>

<style scoped>
* {
  color: #008c8c;
}
</style>