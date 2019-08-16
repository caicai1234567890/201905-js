<template>
  <div id="app">
    <!-- app.vue 用来装导航和router-view的 -->
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'
export default {
    name: 'App',
    components: {
      Tab
    }
}
</script>

<style>
/* // app.vue 的style标签中写的是全局样式 */
* {
  margin:0;
  padding: 0;
}
ul,li{
  list-style: none;
}

a{
  text-decoration: none;
}
.content {
  /* // 内容区域的样式 */
  position: absolute;
  top : 40px;
  width: 100%;
  bottom: 50px;
}
</style>
