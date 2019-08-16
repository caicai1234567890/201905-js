<template>
   <swiper :options="swiperOptions">
     <swiper-slide v-for="(item,index) in sliders" :key="index">
       <img :src="item" alt="">
     </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
   </swiper>
</template>

<script>
// 用第三方的插件做: vue-awesome-swiper
// 基于swiper插件再封装组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Swiper',
  data(){
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 1500
        }
      },
    }
  },
  props: ['sliders'],
  components: {
    swiper,
    swiperSlider
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>

