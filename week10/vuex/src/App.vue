<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>
      <!-- 来自App的Num {{num}} -->
      <!-- 在小胡子语法中从this中取东西,不需要写this -->
      {{$store.state.num}}
    </h1>
    <router-view/>
  </div>
</template>

<script>
import eventBus from './eventBus'
export default {
  name: 'App',
  data () {
    return {
      // num: 13
    }
  },
  methods: {
    addOne () {
      this.num++
    }
  },
  created () {
    /* eventBus.$on('addNum', this.addOne)
    // 监听getNum
    eventBus.$on('getNum', () => {
      console.log('惦记num')
      evevtBus.$emit('receiveNum', this.num)
    }) */
  }
  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
