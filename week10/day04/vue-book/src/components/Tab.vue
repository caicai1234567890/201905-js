<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia-xue"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
/* scoped 表示组件私有的样式,如果要写less 要添加 lang="less" */
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    background: #fff;
    z-index: 100;
    display: flex;
     a{
        display: flex;
        flex-direction: column;
        flex: 1;     // 让每个a标签平分宽度
        align-items: center;
        color : #9acd32;
        font-size: 18px;
     }
     .router-link-active {
      //  vue-router 给当前选中的路由一个选中的类名,如果添加选中的样式,给这个类名添加样式
       color: red;
     }
  }
</style>
