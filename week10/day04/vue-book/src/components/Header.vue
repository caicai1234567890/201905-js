<template>
  <div class="header">
     <slot></slot>
     <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    back: {
      default: false
    }
  },
  methods: {
    goBack (){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 100%;
    background: #afd9ee;
    z-index: 100
  }
  .icon-font {
    position: absolute;
    left: 10px;
  }
</style>
