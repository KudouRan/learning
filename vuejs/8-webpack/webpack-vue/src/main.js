import Vue from 'vue';
const app = new Vue({
  el: '#app',
  data: {
    name: '你好',
    movies: ['大话西游', '你的名字', '天气之子', '星球穿越', '少年派']
  }
});
console.log('hello webpack');