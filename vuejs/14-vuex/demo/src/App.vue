<template>
  <div id="app">
    <state/>
    <mutation></mutation>
    <getter/>
    <action></action>
    <MapFun></MapFun>
  </div>
</template>

<script>
  import State from "./components/State";
  import Mutation from "./components/Mutation";
  import Getter from "./components/Getter";
  import Action from "./components/Action";
  import MapFun from "./components/MapFun";

  export default {
    name: "App",
    components: {
      MapFun,
      Mutation,
      State,
      Getter,
      Action
    }
  };
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    justify-content: space-around;
    text-align: center;

    div {
      border: 1px salmon solid;
      padding: 16px;

      button {
        margin: 6px;
      }
    }
  }

</style>
