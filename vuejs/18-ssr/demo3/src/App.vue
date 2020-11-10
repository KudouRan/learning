<template>
  <div id="app">
    <!-- <router-link to="/about/:id"></router-link> -->
    <router-link :to="`/about/${ranChar()}`">About</router-link>
    <router-link to="/home">Home</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import About from './components/About';
import Home from './components/Home';

export default {
  components: {
    About,
    Home,
  },
  methods: {
    ranNum(n) {
      return Math.ceil(Math.random() * n);
    },
    ranChar() {
      const result = [];
      const n = this.ranNum(3) + 1;
      for (let i = 0; i < n; i++) {
        result.push(String.fromCharCode(97 + this.ranNum(25)));
      }
      return result.join('');
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
