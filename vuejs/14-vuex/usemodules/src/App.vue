<template>
  <div id="app">
    <A></A>
    <B></B>
  </div>
</template>

<script>
  import A from "./components/A";
  import B from "./components/B"

  export default {
    name: 'App',
    components: {
      A,
      B
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
  }

  #app>div{
    border: 1px solid rebeccapurple;
    padding: 20px;
  }
</style>
