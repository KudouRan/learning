<template>
  <div>
    <h1>State</h1>
    <h2>显示counter: {{ counter }}</h2>
    <h2>显示student: </h2>
    <div>
      <ol>
        <li v-for="stu in students">{{stu}}</li>
      </ol>
    </div>
    <h2>显示info</h2>
    <p>{{info}}</p>
  </div>
</template> 

<script>
export default {
  name: "Counter",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    students(){
      return this.$store.state.students;
    },
    info(){
      return this.$store.state.info;
    }
  }
};
</script>

<style>
</style>