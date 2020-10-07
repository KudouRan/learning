<template>
    <div>
        <h1>Getter</h1>
        <h2>显示counter的平方: {{$store.getters.powerCounter}}</h2>
        <h2>显示年龄大于18学生:</h2>
        <p v-for="stu in more18stu">{{ stu }}}</p>
    </div>
</template>

<script>
    export default {
        name: "Getter",
        computed:{
            more18stu(){
                return this.$store.getters.more18stu;
            }
        }
    }
</script>

<style scoped>
    *{
        color: blueviolet;
    }
</style>