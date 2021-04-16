<template>
  <div>
    <h1>B模块使用命名空间</h1>
    <h2>B模块的name:</h2>
    <p>{{aName}}</p>
    <h2>action测试,点击后看控制台</h2>
    <button @click="testB1">点击</button>
    <hr>
    <h2>getters测试</h2>
    <p>调用方法$store.getters['b/testB2'],不能使用点</p>
    <p>{{$store.getters['b/testB2']}}</p>
    <hr>
    <h2>action中commit(root中mutation)</h2>
    <button @click="testB2One">真</button>
    <button @click="testB2Two">假</button>
  </div>
</template>

<script>
  export default {
    name: "B",
    methods: {
      testB1() {
        this.$store.dispatch('b/testB1');
      },
      testB2One(){
        this.$store.dispatch({
          type:'b/testB2'
        })
      },
      testB2Two(){
        this.$store.dispatch({
          type:'b/testB2Two'
        })
      }
    },
    computed: {
      aName() {
        //注意这里的写法
        return this.$store.state.b.name;
      }
    }
  }
</script>

<style scoped>
*{
  color: #4060ff;
}
</style>