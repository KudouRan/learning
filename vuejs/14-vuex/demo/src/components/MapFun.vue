<template>
  <div id="map">
    <div><h1>测试辅助函数</h1></div>
    <div>
      <h2>State测试</h2>
      <h3>counter:{{counter}}</h3>
      <h3>info</h3>
      <p>{{infoTest}}</p>
    </div>
    <div>
      <h2>Getters测试</h2>
      <h3>powerCounter:{{powerCounter}}</h3>
      <h3>adultStu <--> more18stu</h3>
      <ol>
        <li v-for="item in adultStu">{{item}}</li>
      </ol>
    </div>
    <div>
      <h2>Mutations测试</h2>
      <h3>counter状态改变</h3>
      <p>
        <button @click="sub">-1</button>
        <button @click="increment">+1</button>
        <button @click="add">+1</button>
        <button @click="updateCount({num:2})">+2</button>
      </p>
    </div>
    <div>
      <h2>Actions测试</h2>
      <button v-on:click="updateStu">异步添加学生</button>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

  export default {
    name: "MapFun",
    computed: {
      MapFunName() {
        return '这是我原本就有的属性';
      },
      ...mapState(['counter']),
      ...mapState({
        // info: state => state.info,
        //这个能代替上面那种`state => state.info`
        infoTest: 'info'
      }),

      ...mapGetters(['powerCounter']),
      //下面是给getter改名字
      ...mapGetters({adultStu: 'more18stu'})
    },
    methods:{
      ...mapMutations([
        'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

        // `mapMutations` 也支持载荷：
        'updateCount' // 将 `this.updateCount(num)` 映射为 `this.$store.commit('updateCount', num)`
      ]),
      ...mapMutations({
        sub: 'decrement', // 将 `this.sub()` 映射为 `this.$store.commit('decrement')`
        add: 'increment',
      }),

      //actions和mutations一样,这里只举一个例子
      ...mapActions({
        updateStu: 'actionUpdateStu' // 将 `this.updateStu()` 映射为 `this.$store.dispatch('actionUpdateStu')`
      })
    }
  }
</script>

<style scoped lang="less">
  #map {
    margin: 0;
    padding: 0;
    grid-row: 2/span 1; /*是start和end的简写*/
    grid-column: 1/span 4;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    div:first-child {
      padding: 0;
      grid-row: 1/span 1; /*是start和end的简写*/
      grid-column: 1/span 4;

      h1 {
        height: 26px;
      }
    }
  }

</style>