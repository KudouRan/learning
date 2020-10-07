import Vue from 'vue'

Vue.config.productionTip = false;

new Vue({
  //需要安装babel的插件并配置,然后babel会在jsx前自动添加h
  //所以参数必须要有h,可是eslint可不认为不显式使用的是什么好东西
  //webstorm还TM报错
  render: (h) => (<h1>hello world</h1>)
}).$mount('#app');
