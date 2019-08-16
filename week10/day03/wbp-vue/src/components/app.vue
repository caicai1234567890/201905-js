<template>
    <div>
        {{msg}}
        <br>
        <router-link to="/list" tag="button">去列表页</router-link>
        <router-link to="/home" tag="button">去首页</router-link>
        <!-- app.vue里面中一般用来写 router-view 或者导航菜单的 -->
        <router-view></router-view>
    </div> 
</template>

<script>
export default {
    name : "app",
    data(){
        return {
            msg : 'hello'
        }
    }
}
</script>

<style scoped>

</style>

